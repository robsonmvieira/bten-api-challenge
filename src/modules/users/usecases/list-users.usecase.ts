import { IUserRepository } from 'infra/repositories/IUserRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository
  ) {}
}
