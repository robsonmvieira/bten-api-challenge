/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-classes-per-file */
import { ExceptionBase } from '../../../../core/exceptions/exception.base'
import { IHash } from '../../../../core/interface-adapters/interfaces/hash.adapter'
import { ITokenAdapter } from '../../../../core/interface-adapters/interfaces/token.adapter'
import { UserInMemoryRepository } from '../../database/user.in-memory.repository'
import { CreateUserUseCase } from '../create-user/create-user.usecase'
import { FindByIdUseCase } from '../find-by-id/find-by-id.usecase'
import { CreateSessionUseCase } from './create-session.usecase'

class IHashStub implements IHash {
  async hash(password: string, salt: string | number): Promise<string> {
    return 'hashed'
  }
  async verify(password: string, hashedPassword: string): Promise<boolean> {
    return true
  }
}

class TokenStub implements ITokenAdapter {
  sign(payload: unknown, key: string, config: unknown): string {
    return 'payload'
  }
  verify(token: string, key: string): boolean {
    return true
  }
}

describe('Session UseCase', () => {
  let createUserUseCase: CreateUserUseCase
  let userRepository: UserInMemoryRepository
  let hashStub: IHashStub
  let tokenStub: TokenStub
  let findUserById: FindByIdUseCase
  let createSessionUseCase: CreateSessionUseCase
  beforeEach(() => {
    userRepository = new UserInMemoryRepository()
    hashStub = new IHashStub()
    tokenStub = new TokenStub()
    findUserById = new FindByIdUseCase(userRepository)
    createUserUseCase = new CreateUserUseCase(userRepository, hashStub)
    createSessionUseCase = new CreateSessionUseCase(
      userRepository,
      tokenStub,
      hashStub
    )
  })

  test('should throw if user not Exists', async () => {
    expect(async () => {
      await findUserById.execute('1')
    }).rejects.toBeInstanceOf(ExceptionBase)
  })

  test('should throw if password does not match', async () => {
    jest.spyOn(hashStub, 'verify').mockReturnValueOnce(Promise.resolve(false))
    await createUserUseCase.execute({
      name: 'Joe Doe',
      email: 'joe@email.com',
      password: 'valid_password',
      confirm_password: 'valid_password'
    })

    expect(async () => {
      await createSessionUseCase.execute({
        email: 'joe@email.com',
        password: 'invalid_password'
      })
    }).rejects.toBeInstanceOf(ExceptionBase)
  })

  test('should return token if correct data is provided', async () => {
    await createUserUseCase.execute({
      name: 'Joe Doe',
      email: 'joe@email.com',
      password: 'valid_password',
      confirm_password: 'valid_password'
    })

    const token = await createSessionUseCase.execute({
      email: 'joe@email.com',
      password: 'invalid_password'
    })

    expect(token).toHaveProperty('token')
  })
})
