import { User } from 'modules/users/domain/entities/user.entity'
import { ICreateUserDTO } from 'modules/users/dtos/create-user.dto'
import { IUpdateUserDTO } from 'modules/users/dtos/update-user.dto'

export interface IUserRepository {
  getAll(): Promise<User[]>
  getById(userId: string): Promise<User>
  create(user: ICreateUserDTO): Promise<void>
  update(userId: string, user: IUpdateUserDTO): Promise<void>
  remove(userId: string): Promise<void>
}
