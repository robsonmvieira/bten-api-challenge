import { inject, injectable } from 'tsyringe'

import { IUserRepository } from '../../../../infra/repositories/user/IUserRepository'

@injectable()
export class RemoveUserUseCase {
  constructor(
    @inject('IUserRepository') private userRepository: IUserRepository
  ) {}
  async execute(userId: string): Promise<void> {
    await this.userRepository.remove(userId)
  }
}
