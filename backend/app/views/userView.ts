function renderUser (user) {
  return {
    id: user._id,
    nome: user.nome,
    email: user.email
    // senha: user.senha
  }
}

function renderManyUser (users) {
  return users.map(renderUser)
}

export { renderUser, renderManyUser }
