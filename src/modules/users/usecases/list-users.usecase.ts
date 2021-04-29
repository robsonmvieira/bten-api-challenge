import { IUserRepository } from 'infra/repositories/IUserRepository'
import { inject, injectable } from 'tsyringe'

import { User } from '../domain/entities/user.entity'

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository
  ) {}

  execute(): Promise<User[]> {
    return this.userRepository.getAll()
  }
}
