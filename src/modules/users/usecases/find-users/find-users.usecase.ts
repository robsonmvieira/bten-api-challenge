import { IUserRepository } from 'infra/repositories/IUserRepository'
import { User } from 'modules/users/domain/entities/user.entity'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository
  ) {}

  execute(): Promise<User[]> {
    return this.userRepository.getAll()
  }
}
