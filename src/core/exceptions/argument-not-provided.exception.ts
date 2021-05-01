import { ExceptionBase } from './exception.base'
import { Exceptions } from './exception.types'

export class ArgumentNotProvidedException extends ExceptionBase {
  readonly name: Exceptions.argumentNotProvided
}
