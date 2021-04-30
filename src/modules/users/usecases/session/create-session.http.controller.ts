import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateSessionUseCase } from './create-session.usecase'

export class CreateSessionHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(CreateSessionUseCase)
    const { email, password } = req.body
    const result = await useCase.execute({ email, password })
    return res.status(200).json(result)
  }
}
