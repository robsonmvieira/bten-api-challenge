import { getRepository, Repository } from 'typeorm'

import { NotFoundException } from '../../../core/exceptions/not-found.exception'
import { User } from '../../../modules/users/domain/entities/user.entity'
import { ICreateUserDTO } from '../../../modules/users/dtos/create-user.dto'
import { IUpdateUserDTO } from '../../../modules/users/dtos/update-user.dto'
import { IUserRepository } from '../IUserRepository'

export class UserRepository implements IUserRepository {
  repository: Repository<User>
  constructor() {
    this.repository = getRepository(User)
  }
  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ where: { email } })
  }
  async getAll(): Promise<User[]> {
    return this.repository.find()
  }
  async getById(userId: string): Promise<User> {
    const user = await this.repository.findOne(userId)

    if (!user) {
      throw new NotFoundException('User not found', 404)
    }
    return user
  }
  async create(user: ICreateUserDTO): Promise<void> {
    await this.repository.save(user)
  }
  async update(userId: string, user: IUpdateUserDTO): Promise<void> {
    const userExists = await this.repository.findOne(userId)

    if (!userExists) {
      throw new NotFoundException('User not found', 404)
    }
    await this.repository.update(userId, user)
  }
  async remove(userId: string): Promise<void> {
    const user = await this.repository.findOne(userId)

    if (!user) {
      throw new NotFoundException('User not found', 404)
    }
    await this.repository.delete(user.id)
  }
}
