import { inject, injectable } from 'tsyringe'

import { IUserRepository } from '../../../../infra/repositories/IUserRepository'

@injectable()
export class RemoveUserUseCase {
  constructor(
    @inject('IUserRepository') private userRepository: IUserRepository
  ) {}
  async execute(userId: string): Promise<void> {
    this.userRepository.remove(userId)
  }
}
