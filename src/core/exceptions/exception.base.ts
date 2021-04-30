import { Exceptions } from './exception.types'

export abstract class ExceptionBase extends Error {
  abstract name: Exceptions
  constructor(readonly message: string, readonly statusCode = 500) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    Object.setPrototypeOf(this, ExceptionBase.prototype)
  }
}
