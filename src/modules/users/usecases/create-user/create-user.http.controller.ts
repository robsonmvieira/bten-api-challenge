import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateUserUseCase } from './create-user.usecase'

export class CreateUserHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(CreateUserUseCase)
    const { name, email, password, confirm_password } = req.body
    await useCase.execute({
      name,
      email,
      password,
      confirm_password
    })
    return res.status(201).send()
  }
}
