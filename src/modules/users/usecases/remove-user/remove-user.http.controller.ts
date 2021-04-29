import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { RemoveUserUseCase } from './remove-user.usecase'

export class RemoveUserHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(RemoveUserUseCase)
    const { id } = req.params
    await useCase.execute(id)
    return res.status(204).send()
  }
}
