import { container } from 'tsyringe'

import { IHash } from '../../../core/interface-adapters/interfaces/hash.adapter'
import { ITokenAdapter } from '../../../core/interface-adapters/interfaces/token.adapter'
import { UserRepository } from '../../../modules/users/database/UserRepository'
import { HashAdapter } from '../../adapters/hash/bcrypt.hash.adapter'
import { JwtToken } from '../../adapters/token/jwt.token.adapter'
import { IUserRepository } from '../../repositories/user/IUserRepository'

container.registerSingleton<IUserRepository>('IUserRepository', UserRepository)
container.registerSingleton<IHash>('IHashAdapter', HashAdapter)
container.registerSingleton<ITokenAdapter>('ITokenAdapter', JwtToken)
