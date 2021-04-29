import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListUsersUseCase } from './list-users.usecase'

export class ListUsersHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(ListUsersUseCase)
    const users = await useCase.execute()
    return res.status(200).json(users)
  }
}
