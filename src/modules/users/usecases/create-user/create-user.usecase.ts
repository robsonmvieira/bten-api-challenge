import { inject, injectable } from 'tsyringe'

import { ArgumentInvalidException } from '../../../../core/exceptions/argument-invalid.exception'
import { ConflictException } from '../../../../core/exceptions/conflict.exception'
import { IHash } from '../../../../core/interface-adapters/interfaces/hash.adapter'
import { IUserRepository } from '../../../../infra/repositories/user/IUserRepository'
import { CreateUserRequest } from './create-user.dto.request'

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('IUserRepository') private userRepository: IUserRepository,
    @inject('IHashAdapter') private hashAdapter: IHash
  ) {}

  async execute({
    name,
    password,
    email,
    confirm_password
  }: CreateUserRequest): Promise<void> {
    if (password !== confirm_password) {
      throw new ArgumentInvalidException('Password does not match', 400)
    }

    const emailAlreadyExists = await this.userRepository.findByEmail(email)

    if (emailAlreadyExists) {
      throw new ConflictException('Email already Exists', 400)
    }

    const passwordHashed = await this.hashAdapter.hash(password, 8)

    this.userRepository.create({ name, password: passwordHashed, email })
  }
}
