import { Router } from 'express'

import userController from '../controllers/commentsController'
import authController from '../controllers/auth'

const routes = Router()
routes.use('/api/comentarios', authController.checar)

routes.post('/api/comentarios', userController.inserirComentario)
routes.get('/api/comentarios', userController.listarComentarios)
routes.get('/api/comentarios/:id', userController.buscarComentarioId)
routes.delete('/api/comentarios/:id', userController.deletarComentario)

export default routes
