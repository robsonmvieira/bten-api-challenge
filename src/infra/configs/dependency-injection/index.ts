import { IUserRepository } from 'infra/repositories/IUserRepository'
import { UserRepository } from 'infra/repositories/user/UserRepository'
import { container } from 'tsyringe'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
