import { renderUser } from '../views/userView'

function renderPost (post) {
  return {
    id: post._id,
    texto: post.texto,
    likes: post.likes,
    usuario: renderUser(post.usuario)
  }
}

function renderManyPost (posts) {
  return posts.map(renderPost)
}

export { renderPost, renderManyPost }
