import { container } from 'tsyringe'

import { IUserRepository } from '../../repositories/IUserRepository'
import { UserRepository } from '../../repositories/user/UserRepository'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
