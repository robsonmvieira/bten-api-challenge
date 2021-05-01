import { Response, Request } from 'express'
import { container } from 'tsyringe'

import { FindByIdUseCase } from './find-by-id.usecase'

export class FindByIdHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(FindByIdUseCase)
    const { id } = req.params
    const user = await useCase.execute(id)
    return res.status(200).json(user)
  }
}
