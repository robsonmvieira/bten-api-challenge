import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateUserUseCase } from './update-user.usecase'

export class UpdateUserHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(UpdateUserUseCase)
    const { id } = req.params
    const { body } = req
    await useCase.execute(id, body)

    return res.status(204).send()
  }
}
