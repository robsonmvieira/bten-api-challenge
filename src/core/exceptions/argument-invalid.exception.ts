import { ExceptionBase } from './exception.base'
import { Exceptions } from './exception.types'

export class ArgumentInvalidException extends ExceptionBase {
  readonly name: Exceptions.argumentInvalid
}
