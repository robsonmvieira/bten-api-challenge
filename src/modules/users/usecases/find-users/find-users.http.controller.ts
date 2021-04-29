import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListUsersUseCase } from './find-users.usecase'

export class FindUsersHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(ListUsersUseCase)
    const users = await useCase.execute()
    return res.status(200).json(users)
  }
}
