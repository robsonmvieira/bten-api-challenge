import { Router } from 'express'

import sessionsRoutes from './sessions/sessions.routes'
import userRoutes from './users/users.routes'

const routes = Router()
routes.use('/api/users', userRoutes)
routes.use(sessionsRoutes)

export default routes
