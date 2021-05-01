import { IUpdateUserDTO } from 'modules/users/dtos/update-user.dto'
import { inject, injectable } from 'tsyringe'

import { IUserRepository } from '../../../../infra/repositories/IUserRepository'
@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('IUserRepository') private userRepository: IUserRepository
  ) {}

  async execute(userId: string, userUpdateDTO: IUpdateUserDTO): Promise<void> {
    await this.userRepository.update(userId, userUpdateDTO)
  }
}
