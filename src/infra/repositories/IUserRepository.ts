import { User } from 'modules/users/domain/entities/user.entity'

export interface IUserRepository {
  getAll(): Promise<User[]>
  getById(userId: string): Promise<User | undefined>
  create(user: User): Promise<User>
  update(userId: string, user: User): Promise<User>
  remove(userId: string): Promise<void>
}
