import { inject, injectable } from 'tsyringe'

import { IUserRepository } from '../../../../infra/repositories/user/IUserRepository'
import { UserOrmMapper } from '../../database/user.orm-mapper'
import { UsersResponse } from '../../dtos/users-response'

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject('IUserRepository') private userRepository: IUserRepository
  ) {}

  async execute(): Promise<UsersResponse[]> {
    const users = await this.userRepository.getAll()
    const usersReponse = users.map(user => UserOrmMapper.toUserResponse(user))

    return usersReponse
  }
}
