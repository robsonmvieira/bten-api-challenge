import { User } from 'modules/users/domain/entities/user.entity'

import { IUserRepository } from '../IUserRepository'

export class UserRepository implements IUserRepository {
  constructor() {}
  getAll(): Promise<User[]> {
    throw new Error('Method not implemented.')
  }
  getById(userId: string): Promise<User> {
    throw new Error('Method not implemented.')
  }
  create(user: User): Promise<User> {
    throw new Error('Method not implemented.')
  }
  update(userId: string, user: User): Promise<User> {
    throw new Error('Method not implemented.')
  }
  remove(userId: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
