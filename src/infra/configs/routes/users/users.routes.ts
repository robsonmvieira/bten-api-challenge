import { Router } from 'express'

import { CreateUserHttpController } from '../../../../modules/users/usecases/create-user/create-user.http.controller'
import { FindByIdHttpController } from '../../../../modules/users/usecases/find-by-id/find-by-id.http.controller'
import { FindUsersHttpController } from '../../../../modules/users/usecases/find-users/find-users.http.controller'
import { RemoveUserHttpController } from '../../../../modules/users/usecases/remove-user/remove-user.http.controller'
import { UpdateUserHttpController } from '../../../../modules/users/usecases/update-user/update-user.http.controller'
import authInterceptor from '../../../interceptors/auth.interceptor'

const userRoutes = Router()

const findByIdHttpController = new FindByIdHttpController()
const findUsersHttpController = new FindUsersHttpController()
const createUserHttpController = new CreateUserHttpController()
const updateUserHttpController = new UpdateUserHttpController()
const removeUserHttpController = new RemoveUserHttpController()

userRoutes.post('/', createUserHttpController.handle)
userRoutes.get('/', findUsersHttpController.handle)
userRoutes.get('/:id', findByIdHttpController.handle)
userRoutes.put('/:id', authInterceptor, updateUserHttpController.handle)
userRoutes.delete('/:id', authInterceptor, removeUserHttpController.handle)

export default userRoutes
