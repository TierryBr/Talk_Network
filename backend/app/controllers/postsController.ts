import { Request, Response } from 'express'
import Post from '../models/post'
import Comment from '../models/comment'
import { renderPost, renderManyPost } from '../views/postView'
import jwt from 'jsonwebtoken'
// import { renderUser, renderManyUser } from '../views/userView'

interface post {
  id: number,
  texto: string,
  likes: number,
  usuario: string
}

export default {
  async inserirPost (req: Request, res: Response) {
    const token = req.headers.token
    const payload = jwt.decode(token)

    const post: post = new Post({
      texto: req.body.texto,
      likes: req.body.likes,
      usuario: payload.id
    })
    Post.create(post)
      .then(function (posts) {
        res.status(201).json(renderPost(posts))
      })
      .catch(function (error) {
        res.status(400).json({ message: 'Error ao cadastrar post' + error })
      })
  },

  async listarPosts (req: Request, res: Response) {
    Post.find().populate('usuario').exec()
      .then(function (posts) {
        res.status(200).json(renderManyPost(posts))
      })
      .catch(function (error) {
        res.status(500).json({ message: 'Erro ao listar posts' + error })
      })
  },

  async buscarPostId (req: Request, res: Response) {
    const id = req.params.id
    Post.findById(id).exec()
      .then(function (posts) {
        res.status(200).json(renderPost(posts))
      })
      .catch(function (error) {
        res.status(400).json({ message: 'Erro ao buscar post' + error })
      })
  },

  async deletarPost (req: Request, res: Response) {
    const id = req.params.id
    const token = req.headers.token
    const payload = jwt.decode(token)

    Post.findById(id).exec()
      .then(function (post) {
        if (post.usuario == payload.id) {
          Post.findByIdAndDelete(id)
            .then(function (posts) {
              res.status(200).json(renderPost(posts))
            })
            .catch(function (error) {
              res.status(404).json({ message: 'Erro ao deletar post' + error })
            })
        } else {
          res.status(404).json({ message: 'Não autorizado' })
        }
      })
      .catch(function (error) {
        res.status(400).json({ message: 'Erro ao buscar post' + error })
      })
  },

  async obterComentarios (req: Request, res: Response) {
    const id = req.params.id
    Comment.find({ post: id }).populate('usuario')
      .then(function (comments) {
        res.status(200).json(renderManyPost(comments))
      })
      .catch(function (error) {
        res.status(500).json({ message: 'Erro ao obter comentario' + error })
      })
  }
}
