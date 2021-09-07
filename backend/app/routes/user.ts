import { Router } from 'express'

import userController from '../controllers/userController'
import authController from '../controllers/auth'

const routes = Router()
routes.post('/api/login', authController.login)
routes.post('/api/usuarios', userController.inserirUsuario)

routes.use('/api/usuarios', authController.checar)

routes.get('/api/usuarios', userController.listarUsuarios)
routes.get('/api/usuarios/:id', userController.buscarUsuarioId)
routes.get('/api/usuarios/:id/posts', userController.obterPosts)

routes.delete('/api/usuarios/:id', userController.deletarUsuario)

export default routes
