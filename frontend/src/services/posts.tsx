import axios from 'axios';

export function listarPosts(token: any) {
  return axios({
    method: 'GET',
    url: 'http://localhost:3333/api/posts',
    headers: {
      "token": token,
    },
  })
}

export function inserirPosts(token: any, texto: any, likes: any) {
  return axios({
    method: 'POST',
    url: 'http://localhost:3333/api/posts',
    headers: {
      "token": token,
    },
    data: {
      "texto": texto,
      "likes": likes
    }
  })
}