/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import { ArgumentNotProvidedException } from '../../core/exceptions/argument-not-provided.exception'
import { NotFoundException } from '../../core/exceptions/not-found.exception'
import { UserRepository } from '../repositories/user/UserRepository'

interface IPayload {
  userId: string
}

export default async function authInterceptor(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userRepository = new UserRepository()
  const headerAuthorization = req.headers.authorization

  if (!headerAuthorization) {
    throw new ArgumentNotProvidedException('Token not provided', 401)
  }
  const [, token] = req.headers.authorization.split(' ')
  try {
    const { userId } = verify(token, process.env.APP_SECRET) as IPayload
    const userExists = await userRepository.getById(userId)
    if (!userExists) {
      throw new NotFoundException('User not found', 401)
    }
  } catch (error) {
    throw new ArgumentNotProvidedException('Token is invalid', 401)
  }
  next()
}
