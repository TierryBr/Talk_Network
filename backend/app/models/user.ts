import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
})

export default model('Usuario', UserSchema)
