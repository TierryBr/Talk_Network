import User from '../models/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default {
  login (req, res) {
    function logar (user) {
      if (!bcrypt.compareSync(req.body.senha, user.senha)) {
        falhar()
      } else {
        const token = jwt.sign({ id: user.id }, 'secret')
        res.status(200).json({
          message: 'Logado',
          token: token,
          userId: user.id,
          email: user.email,
          nome: user.nome
        })
      }
    }
    function falhar () {
      res.status(401).send('Invalid login')
    }
    User.findOne({ email: req.body.email }).exec().then(logar, falhar).catch(falhar)
  },

  checar (req, res, next) {
    jwt.verify(req.headers.token, 'secret', function (error, decoded) {
      if (error) {
        return res.status(401).json({
          title: 'Not Authenticated',
          error: error
        })
      }
      next()
    })
  }
}
