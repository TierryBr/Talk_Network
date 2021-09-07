import { renderUser } from '../views/userView'

function renderComment (comment) {
  return {
    id: comment._id,
    texto: comment.texto,
    post: comment.post,
    usuario: renderUser(comment.usuario)
  }
}

function renderManyComment (comments) {
  return comments.map(renderComment)
}

export { renderComment, renderManyComment }
