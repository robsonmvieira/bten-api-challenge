import { sign, verify } from 'jsonwebtoken'

import { ITokenAdapter } from '../../../core/interface-adapters/interfaces/token.adapter'

export class JwtToken implements ITokenAdapter {
  sign(payload: string | any, key: string, config: unknown): string {
    return sign(payload, key, config)
  }
  verify(token: string, key: string): string | any {
    return verify(token, key)
  }
}
