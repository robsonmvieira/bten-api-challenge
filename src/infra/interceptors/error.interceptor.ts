/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express'

import { ExceptionBase } from '../../core/exceptions/exception.base'

export default function errorInterceptor(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof ExceptionBase) {
    return response.status(err.statusCode).json({ message: err.message })
  }
  return response
    .status(500)
    .json({ message: `Internal Server Error - ${err.message}` })
}
