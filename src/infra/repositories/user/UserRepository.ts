import { ICreateUserDTO } from 'modules/users/dtos/create-user.dto'
import { getRepository, Repository } from 'typeorm'

import { User } from '../../../modules/users/domain/entities/user.entity'
import { IUserRepository } from '../IUserRepository'

export class UserRepository implements IUserRepository {
  repository: Repository<User>
  constructor() {
    this.repository = getRepository(User)
  }
  async getAll(): Promise<User[]> {
    return this.getAll()
  }
  async getById(userId: string): Promise<User> {
    return this.repository.findOne(userId)
  }
  async create(user: ICreateUserDTO): Promise<void> {
    await this.repository.save(user)
  }
  async update(userId: string, user: User): Promise<void> {
    const userExists = await this.repository.findOne(userId)
    if (!userExists) {
      throw new Error('user does not exist')
    }
    await this.repository.update(userId, user)
  }
  async remove(userId: string): Promise<void> {
    const userExists = await this.getById(userId)

    if (!userExists) {
      throw new Error("User Doesn't exists")
    }
    await this.repository.delete(userExists.id)
  }
}
