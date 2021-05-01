import { injectable, inject } from 'tsyringe'

import { IUserRepository } from '../../../../infra/repositories/user/IUserRepository'
import { UserResponse } from '../../dtos/user.response'

@injectable()
export class FindByIdUseCase {
  constructor(
    @inject('IUserRepository') private userRepository: IUserRepository
  ) {}

  async execute(userId: string): Promise<UserResponse> {
    const user = await this.userRepository.getById(userId)

    const userResponse: UserResponse = {
      id: user.id,
      name: user.name,
      email: user.email
    }
    return userResponse
  }
}
