import React from 'react';
import {useForm} from 'react-hook-form'
import { useHistory } from "react-router-dom";
import {ImUserPlus} from 'react-icons/im'

import '../styles/formcadastro.scss';
import { cadastrar } from '../services/auth';


export function FormCadastro() {
  const {register, handleSubmit} = useForm();
  let history = useHistory();

  const submeter = (user: any) => {
    cadastrar(user).then((res) => {
      console.log(res);
      history.push("/login");
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
            <h2>Realizar cadastro</h2>
            <form onSubmit={handleSubmit(submeter)}>
              <input type="text" placeholder="Digite seu nome" {...register("nome")}/>
              <input type="email" placeholder="Digite seu email" {...register("email")}/>
              <input type="password" placeholder="Digite sua senha" {...register("senha")}/>
              <button className="btn-cadastro">
                <ImUserPlus size={20}/>
                Cadastrar
              </button>
            </form>
          </div>
        </main>
      </aside>
    </div>
  );
}