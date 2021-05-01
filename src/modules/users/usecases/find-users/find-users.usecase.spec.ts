import { UserInMemoryRepository } from '../../database/user.in-memory.repository'
import { ListUsersUseCase } from './find-users.usecase'

describe('Find Users Usecase', () => {
  let userRepository: UserInMemoryRepository
  let listUsersUseCase: ListUsersUseCase
  beforeEach(() => {
    userRepository = new UserInMemoryRepository()
    listUsersUseCase = new ListUsersUseCase(userRepository)
  })
  it('Should return User list', async () => {
    const users = await listUsersUseCase.execute()
    expect(users).toEqual([])
  })
})
