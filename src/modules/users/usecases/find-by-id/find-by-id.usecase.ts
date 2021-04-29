import { IUserRepository } from 'infra/repositories/IUserRepository'
import { User } from 'modules/users/domain/entities/user.entity'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindByIdUseCase {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository
  ) {}

  async execute(userId: string): Promise<User> {
    return this.userRepository.getById(userId)
  }
}
