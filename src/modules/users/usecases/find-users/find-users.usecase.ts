import { User } from 'modules/users/domain/entities/user.entity'
import { inject, injectable } from 'tsyringe'

import { IUserRepository } from '../../../../infra/repositories/IUserRepository'

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject('IUserRepository') private userRepository: IUserRepository
  ) {}

  async execute(): Promise<User[]> {
    return this.userRepository.getAll()
  }
}
