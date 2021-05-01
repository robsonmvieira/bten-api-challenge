import { inject, injectable } from 'tsyringe'

import { ArgumentInvalidException } from '../../../../core/exceptions/argument-invalid.exception'
import { IHash } from '../../../../core/interface-adapters/interfaces/hash.adapter'
import { ITokenAdapter } from '../../../../core/interface-adapters/interfaces/token.adapter'
import { IUserRepository } from '../../../../infra/repositories/IUserRepository'
import { CreateSessionRequest } from './create-session.request'
import { CreateSessionResponse } from './create-session.response'

@injectable()
export class CreateSessionUseCase {
  constructor(
    @inject('IUserRepository') private userRepository: IUserRepository,
    @inject('ITokenAdapter') private tokeJWT: ITokenAdapter,
    @inject('IHashAdapter') private passwordhash: IHash
  ) {}

  async execute({
    email,
    password
  }: CreateSessionRequest): Promise<CreateSessionResponse> {
    const userExists = await this.userRepository.findByEmail(email)

    if (!userExists) {
      throw new ArgumentInvalidException('Email or Password is incorrect', 400)
    }

    const passwordMatch = await this.passwordhash.verify(
      password,
      userExists.password
    )
    if (!passwordMatch) {
      throw new ArgumentInvalidException('Email or Password is incorrect', 400)
    }

    const token = this.tokeJWT.sign(
      { userId: userExists.id },
      process.env.APP_SECRET,
      {
        expiresIn: process.env.APP_EXESPIRE_IN
      }
    )

    const response: CreateSessionResponse = {
      user: {
        id: userExists.id,
        email: userExists.email
      },
      token
    }

    return response
  }
}
