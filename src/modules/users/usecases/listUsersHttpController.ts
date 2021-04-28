import { Request, Response } from 'express'

export class ListUsersHttpController {
  handle(req: Request, res: Response): Response {
    const { name } = req.body

    return res.send(name)
  }
}
