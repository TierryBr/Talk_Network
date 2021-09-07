import React, { useContext } from 'react';
import {useForm} from 'react-hook-form'
import { useHistory } from "react-router-dom";
import {ImUserPlus} from 'react-icons/im'

import '../styles/formcadastro.scss';
import { loginn } from '../services/auth';
import { AuthContext } from '../App';


export function FormLogin() {
  const {register, handleSubmit} = useForm();
  const auth = useContext(AuthContext);
  let history = useHistory();

  const logar = (login: any) => {
    loginn(login)
    .then((res) => {
      auth.setAuth({token: res.data.token, nome: res.data.nome})
      history.push("/feed");
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div id="page-cadastro">
      <aside className="cadastro-details">
        <main>
          <div className="card">
            <h2>Realizar login</h2>
            <form onSubmit={handleSubmit(logar)}>
              <input type="email" placeholder="Digite seu email" {...register("email")}/>
              <input type="password" placeholder="Digite sua senha" {...register("senha")}/>
              <button className="btn-cadastro">
                <ImUserPlus size={20}/>
                Logar
              </button>
            </form>
          </div>
        </main>
      </aside>
    </div>
  );
}