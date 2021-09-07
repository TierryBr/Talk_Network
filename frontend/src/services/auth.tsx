import axios from 'axios';

export function cadastrar(user: any) {
  return axios({
    method: 'POST',
    url: 'http://localhost:3333/api/usuarios',
    data: user,
  })
}

export function loginn(login: any) {
  return axios({
    method: 'POST',
    url: 'http://localhost:3333/api/login',
    data: login,
  })
}