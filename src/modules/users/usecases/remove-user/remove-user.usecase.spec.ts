import { ExceptionBase } from '../../../../core/exceptions/exception.base'
import { IHash } from '../../../../core/interface-adapters/interfaces/hash.adapter'
import { UserInMemoryRepository } from '../../database/user.in-memory.repository'
import { CreateUserUseCase } from '../create-user/create-user.usecase'
import { RemoveUserUseCase } from './remove-user.usecase'

class IHashStub implements IHash {
  async hash(password: string, salt: string | number): Promise<string> {
    return 'hashed'
  }
  async verify(password: string, hashedPassword: string): Promise<boolean> {
    return true
  }
}

describe('Remove User UseCase', () => {
  let userRepository: UserInMemoryRepository
  let removeUserUseCase: RemoveUserUseCase
  let createUserUseCase: CreateUserUseCase
  let hashStub: IHashStub
  beforeEach(() => {
    userRepository = new UserInMemoryRepository()
    removeUserUseCase = new RemoveUserUseCase(userRepository)
    hashStub = new IHashStub()
    createUserUseCase = new CreateUserUseCase(userRepository, hashStub)
  })
  it('shoud throw if user not found', async () => {
    expect(async () => {
      await removeUserUseCase.execute('1')
    }).rejects.toBeInstanceOf(ExceptionBase)
  })

  it('should remove user if correct id is provided', async () => {
    await createUserUseCase.execute({
      name: 'Joe Doe',
      email: 'joe@email.com',
      password: 'valid_password',
      confirm_password: 'valid_password'
    })
    await removeUserUseCase.execute('1')
    expect(userRepository.users).toEqual([])
  })
})
