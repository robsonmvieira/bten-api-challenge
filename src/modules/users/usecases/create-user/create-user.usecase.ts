import { inject, injectable } from 'tsyringe'

import { IHash } from '../../../../core/interface-adapters/interfaces/hash.adapter'
import { IUserRepository } from '../../../../infra/repositories/IUserRepository'
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
      throw new Error('Password does not match')
    }
    const passwordHashed = await this.hashAdapter.hash(password, 8)

    this.userRepository.create({ name, password: passwordHashed, email })
  }
}
