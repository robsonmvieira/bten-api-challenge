import { container } from 'tsyringe'

import { IHash } from '../../../core/interface-adapters/interfaces/hash.adapter'
import { HashAdapter } from '../../adapters/hash/bcrypt.hash.adapter'
import { IUserRepository } from '../../repositories/IUserRepository'
import { UserRepository } from '../../repositories/user/UserRepository'

container.registerSingleton<IUserRepository>('IUserRepository', UserRepository)
container.registerSingleton<IHash>('IHashAdapter', HashAdapter)
