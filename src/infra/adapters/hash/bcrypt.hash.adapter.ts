import { hash, compare } from 'bcryptjs'

import { IHash } from '../../../core/interface-adapters/interfaces/hash.adapter'

export class HashAdapter implements IHash {
  async hash(password: string, salt: string | number): Promise<string> {
    return hash(password, salt)
  }
  verify(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword)
  }
}
