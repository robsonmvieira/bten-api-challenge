import { ICreateUserDTO } from 'modules/users/dtos/create-user.dto'
import { inject, injectable } from 'tsyringe'

import { IUserRepository } from '../../../../infra/repositories/IUserRepository'

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('IUserRepository') private userRepository: IUserRepository
  ) {}

  async execute(createUserDto: ICreateUserDTO): Promise<void> {
    this.userRepository.create(createUserDto)
  }
}
