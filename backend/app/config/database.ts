import mongoose from 'mongoose'

export default function (uri) {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  mongoose.connection.on('connection', () => {
    console.log('Conectado em ' + uri)
  })
  mongoose.connection.on('disconnected', () => {
    console.log('Desconectado de ' + uri)
  })
  mongoose.connection.on('error', () => {
    console.log('Erro na conexão ' + uri)
  })
  mongoose.set('debug', true)
}
