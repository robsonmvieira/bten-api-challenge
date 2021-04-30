import { Router } from 'express'

import { CreateSessionHttpController } from '../../../../modules/users/usecases/session/create-session.http.controller'

const sessionRoutes = Router()

const createSessionHttpController = new CreateSessionHttpController()
sessionRoutes.post('/sessions', createSessionHttpController.handle)

export default sessionRoutes
