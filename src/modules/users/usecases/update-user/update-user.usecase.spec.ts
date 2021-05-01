import { ExceptionBase } from '../../../../core/exceptions/exception.base'
import { IHash } from '../../../../core/interface-adapters/interfaces/hash.adapter'
import { UserInMemoryRepository } from '../../database/user.in-memory.repository'
import { CreateUserUseCase } from '../create-user/create-user.usecase'
import { FindByIdUseCase } from '../find-by-id/find-by-id.usecase'
import { UpdateUserUseCase } from './update-user.usecase'

class IHashStub implements IHash {
  async hash(password: string, salt: string | number): Promise<string> {
    return 'hashed'
  }
  async verify(password: string, hashedPassword: string): Promise<boolean> {
    return true
  }
}

describe('Update User UseCase', () => {
  let userRepository: UserInMemoryRepository
  let updateUserUseCase: UpdateUserUseCase
  let createUserUseCase: CreateUserUseCase
  let findUserByIdUseCase: FindByIdUseCase
  let hashStub: IHashStub

  beforeEach(() => {
    userRepository = new UserInMemoryRepository()
    hashStub = new IHashStub()
    updateUserUseCase = new UpdateUserUseCase(userRepository)
    createUserUseCase = new CreateUserUseCase(userRepository, hashStub)
    findUserByIdUseCase = new FindByIdUseCase(userRepository)
  })
  it('Should throw if user not found', async () => {
    const payload = {
      name: 'new name'
    }
    expect(async () => {
      await updateUserUseCase.execute('1', payload)
    }).rejects.toBeInstanceOf(ExceptionBase)
  })

  it('Should be able update user if correct data is provided', async () => {
    const payload = {
      name: 'new name'
    }
    await createUserUseCase.execute({
      name: 'Joe Doe',
      email: 'joe@email.com',
      password: 'valid_password',
      confirm_password: 'valid_password'
    })

    await updateUserUseCase.execute('1', payload)
    const result = await findUserByIdUseCase.execute('1')
    expect(result).toMatchObject({ id: '1', name: 'new name' })
  })
})
