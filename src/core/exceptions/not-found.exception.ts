import { ExceptionBase } from './exception.base'
import { Exceptions } from './exception.types'

export class NotFoundException extends ExceptionBase {
  readonly name: Exceptions.notFound
}
