import { Router } from 'express'

import userController from '../controllers/postsController'
import authController from '../controllers/auth'

const routes = Router()
routes.use('/api/posts', authController.checar)

routes.post('/api/posts', userController.inserirPost)
routes.get('/api/posts', userController.listarPosts)
routes.get('/api/posts/:id', userController.buscarPostId)
routes.get('/api/posts/:id/comentarios', userController.obterComentarios)

routes.delete('/api/posts/:id', userController.deletarPost)

export default routes
