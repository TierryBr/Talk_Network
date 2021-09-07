import { Request, Response } from 'express'
import User from '../models/user'
import Post from '../models/post'
import { renderUser, renderManyUser } from '../views/userView'
import { renderManyPost } from '../views/postView'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

interface user {
  nome: string,
  email: string,
  senha: string,
}

export default {
  async inserirUsuario (req: Request, res: Response) {
    // const users: user = req.body
    const users: user = {
      nome: req.body.nome,
      email: req.body.email,
      senha: bcrypt.hashSync(req.body.senha, 10)
    }
    User.create(users)
      .then(function (users) {
        res.status(201).json(renderUser(users))
      })
      .catch(function (error) {
        res.status(400).json({ message: 'Error ao cadastrar usuário' + error })
      })
  },

  async listarUsuarios (req: Request, res: Response) {
    User.find().populate('post').exec()
      .then(function (users) {
        res.status(200).json(renderManyUser(users))
      })
      .catch(function (error) {
        res.status(500).json({ message: 'Erro ao listar usuários' + error })
      })
  },

  async buscarUsuarioId (req: Request, res: Response) {
    const id = req.params.id
    User.findById(id).exec()
      .then(function (users) {
        res.status(200).json(renderUser(users))
      })
      .catch(function (error) {
        res.status(400).json({ message: 'Erro ao buscar usuário' + error })
      })
  },

  async deletarUsuario (req: Request, res: Response) {
    const id = req.params.id
    const token = req.headers.token
    const payload = jwt.decode(token)
    if (req.params.id === payload.id) {
      User.findByIdAndDelete(id)
        .then(function (users) {
          res.status(200).json(renderUser(users))
        })
        .catch(function (error) {
          res.status(404).json({ message: 'Erro ao deletar usuário' + error })
        })
    } else {
      res.status(404).json({ message: 'Não autorização' })
    }
  },

  async obterPosts (req: Request, res: Response) {
    const id = req.params.id
    Post.find({ usuario: id })
      .then(function (posts) {
        res.status(200).json(renderManyPost(posts))
      })
      .catch(function (error) {
        res.status(500).json({ message: 'Erro ao obter post' + error })
      })
  }

}
