import { Schema, model } from 'mongoose'
import mongodb from 'mongodb'

const CommentSchema = new Schema({
  texto: {
    type: String,
    required: true
  },
  post: {
    type: mongodb.ObjectId,
    ref: 'Posts'
  },
  usuario: {
    type: mongodb.ObjectId,
    ref: 'Usuario'
  }
})

export default model('Comentarios', CommentSchema)
