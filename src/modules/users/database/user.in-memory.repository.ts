import { NotFoundException } from '../../../core/exceptions/not-found.exception'
import { IUserRepository } from '../../../infra/repositories/user/IUserRepository'
import { ICreateUserDTO } from '../dtos/create-user.dto'
import { IUpdateUserDTO } from '../dtos/update-user.dto'
import { UserOrmEntity as User } from './user-orm.entity'

export class UserInMemoryRepository implements IUserRepository {
  users: User[] = []
  async getAll(): Promise<User[]> {
    return this.users
  }
  async getById(userId: string): Promise<User> {
    const user = this.users.find(user => user.id === userId)

    if (!user) {
      throw new NotFoundException('user not found', 404)
    }
    return user
  }
  async create(user: ICreateUserDTO): Promise<void> {
    const newUser = new User()
    newUser.id = String(this.users.length + 1)
    Object.assign(newUser, user)
    this.users.push(newUser)
  }
  async update(userId: string, user: IUpdateUserDTO): Promise<void> {
    const userExists = this.users.find(user => user.id === userId)
    if (!userExists) {
      throw new NotFoundException('User not found', 404)
    }
    Object.assign(userExists, user)
    this.users = this.users.map(el => (el.id !== userId ? el : userExists))
  }
  async remove(userId: string): Promise<void> {
    const user = this.users.find(user => user.id === userId)

    if (!user) {
      throw new NotFoundException('User not found', 404)
    }
    this.users = this.users.filter(user => user.id !== userId)
  }
  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email)
    return user
  }
}
