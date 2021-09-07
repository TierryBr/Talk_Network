import { Schema, model } from 'mongoose'
import mongodb from 'mongodb'

const PostSchema: Schema = new Schema({
  texto: {
    type: String,
    required: true
  },
  likes: {
    type: Number
  },
  usuario: {
    type: mongodb.ObjectId,
    ref: 'Usuario'
  }
})

export default model('Posts', PostSchema)
