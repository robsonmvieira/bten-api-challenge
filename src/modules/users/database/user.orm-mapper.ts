import { User } from 'modules/users/domain/entities/user.entity'

import { UserResponse } from '../dtos/user.response'

export class UserOrmMapper {
  static toUserResponse(user: User): UserResponse {
    return {
      id: user.id,
      email: user.email,
      name: user.name
    }
  }
}
