import axios from 'axios';

export function listarComentariosPorId(token: any, post: any) {
  return axios({
    method: 'GET',
    url: `http://localhost:3333/api/posts/${post}/comentarios`,
    headers: {
      "token": token,
    },
  })
}

export function inserirComentario(token: any, post: any, texto: any) {
  return axios({
    method: 'POST',
    url: 'http://localhost:3333/api/comentarios',
    headers: {
      "token": token,
    },
    data: {
      "post": post, 
      "texto": texto
    }
  })
}