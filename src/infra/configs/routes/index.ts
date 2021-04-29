import { Router } from 'express'

import userRoutes from './users/routes'

const routes = Router()
routes.use('/api/users', userRoutes)
export default routes
