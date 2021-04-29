import { User } from 'modules/users/domain/entities/user.entity'
import { getRepository, Repository } from 'typeorm'

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
  async create(user: User): Promise<User> {
    return this.repository.save(user)
  }
  async update(userId: string, user: User): Promise<User> {
    const result = await this.repository.findOne(userId)
    const userUpdated = { ...result, ...user }
    await this.repository.update(userId, user)
    return userUpdated
  }
  async remove(userId: string): Promise<void> {
    const userExists = await this.getById(userId)

    if (!userExists) {
      throw new Error("User Doesn't exists")
    }
    await this.repository.delete(userExists.id)
  }
}
