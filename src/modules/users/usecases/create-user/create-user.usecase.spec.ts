import { ExceptionBase } from '../../../../core/exceptions/exception.base'
import { IHash } from '../../../../core/interface-adapters/interfaces/hash.adapter'
import { UserInMemoryRepository } from '../../database/user.in-memory.repository'
import { CreateUserUseCase } from './create-user.usecase'

class IHashStub implements IHash {
  async hash(password: string, salt: string | number): Promise<string> {
    return 'hashed'
  }
  async verify(password: string, hashedPassword: string): Promise<boolean> {
    return true
  }
}

describe('Create User UseCase', () => {
  let createUserUseCase: CreateUserUseCase
  let userRepositoryInMemory: UserInMemoryRepository
  let hashStub: IHashStub

  beforeEach(() => {
    userRepositoryInMemory = new UserInMemoryRepository()
    hashStub = new IHashStub()
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory, hashStub)
  })
  it('Should be able create a new user if correct properties provided', async () => {
    const createMethod = jest.spyOn(userRepositoryInMemory, 'create')
    await createUserUseCase.execute({
      name: 'Joe Doe',
      email: 'joe@email.com',
      password: 'valid_password',
      confirm_password: 'valid_password'
    })
    expect(createMethod).toHaveBeenCalledWith({
      name: 'Joe Doe',
      email: 'joe@email.com',
      password: 'hashed'
    })
    expect(userRepositoryInMemory.users.length).toBe(1)
  })

  it('should throw if password confirmation does not match', async () => {
    expect(async () => {
      await createUserUseCase.execute({
        name: 'Joe Doe',
        email: 'joe@email.com',
        password: 'valid_password',
        confirm_password: 'different_password'
      })
    }).rejects.toBeInstanceOf(ExceptionBase)
  })

  it('should not be able create a new user if email already exists', async () => {
    await createUserUseCase.execute({
      name: 'Joe Doe',
      email: 'joe@email.com',
      password: 'valid_password',
      confirm_password: 'valid_password'
    })

    expect(async () => {
      await createUserUseCase.execute({
        name: 'Joe Doe',
        email: 'joe@email.com',
        password: 'valid_password',
        confirm_password: 'valid_password'
      })
    }).rejects.toBeInstanceOf(ExceptionBase)
  })
})
