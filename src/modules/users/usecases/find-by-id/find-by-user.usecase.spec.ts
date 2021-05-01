import { ExceptionBase } from '../../../../core/exceptions/exception.base'
import { IHash } from '../../../../core/interface-adapters/interfaces/hash.adapter'
import { UserInMemoryRepository } from '../../database/user.in-memory.repository'
import { CreateUserUseCase } from '../create-user/create-user.usecase'
import { FindByIdUseCase } from './find-by-id.usecase'

class IHashStub implements IHash {
  async hash(password: string, salt: string | number): Promise<string> {
    return 'hashed'
  }
  async verify(password: string, hashedPassword: string): Promise<boolean> {
    return true
  }
}

describe('Find User By Id UseCase', () => {
  let findUserById: FindByIdUseCase
  let userRepository: UserInMemoryRepository
  let createUserUseCase: CreateUserUseCase
  let hashStub: IHashStub
  beforeEach(() => {
    userRepository = new UserInMemoryRepository()
    findUserById = new FindByIdUseCase(userRepository)
    hashStub = new IHashStub()
    createUserUseCase = new CreateUserUseCase(userRepository, hashStub)
  })
  it('Should return the user if correct id is provided', async () => {
    await createUserUseCase.execute({
      name: 'Joe Doe',
      email: 'joe@email.com',
      password: 'valid_password',
      confirm_password: 'valid_password'
    })
    const user = await findUserById.execute('1')
    expect(user).toHaveProperty('id')
  })

  it('Should throw when incorrect id is provided', async () => {
    expect(async () => {
      await findUserById.execute('1')
    }).rejects.toBeInstanceOf(ExceptionBase)
  })
})
