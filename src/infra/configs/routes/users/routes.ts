import { Router } from 'express'

import { ListUsersHttpController } from '../../../../modules/users/usecases/listUsersHttpController'

const routes = Router()
const listUserController = new ListUsersHttpController()
routes.get('/users', listUserController.handle)
routes.get('/users:id', (req, res) => {})
routes.post('/users', (req, res) => {})
routes.put('/users:id', (req, res) => {})
routes.delete('/users:id', (req, res) => {})

export default routes
