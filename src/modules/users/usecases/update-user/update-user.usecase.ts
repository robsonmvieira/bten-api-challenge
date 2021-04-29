import { IUserRepository } from 'infra/repositories/IUserRepository'
import { IUpdateUserDTO } from 'modules/users/dtos/update-user.dto'
import { inject, injectable } from 'tsyringe'
@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('IUserRepository') private userRepository: IUserRepository
  ) {}

  async execute(userId: string, userUpdateDTO: IUpdateUserDTO): Promise<void> {
    this.userRepository.update(userId, userUpdateDTO)
  }
}
