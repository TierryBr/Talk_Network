import React, { useContext } from 'react';
import {CgProfile} from 'react-icons/cg'
import {ImProfile} from 'react-icons/im'
import {FiLogIn} from 'react-icons/fi'
import {BiLogOut} from 'react-icons/bi'
import {GrUserNew} from 'react-icons/gr'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../App';

import '../styles/sidebar.scss';


function SiderbarLogged({nome}: any) {
  const {setAuth} = useContext(AuthContext);

  return (
    <div id="page-navigation">
      <aside>
        <header>
          <p className="name">Bem vindo, {nome}</p>
          <NavLink to="/feed" className="perfil">
            <CgProfile size={23}/>
            <p>Perfil</p>
          </NavLink>
          <NavLink to="/feed" className="feed">
            <ImProfile size={22}/>
            <p>Linha do tempo</p>
          </NavLink>
          <NavLink exact to="/" className="login" onClick={() => {setAuth({token: null, nome: null})}}>
            <BiLogOut size={25}/>
            <p>Logout</p>
          </NavLink>
        </header>
      </aside>
    </div>
  )
}

function SiderbarNotLogged() {
  return (
    <div id="page-navigation">
      <aside>
        <header>
          <p className="name">Bem vindo</p>
          <NavLink exact to="/" className="login">
            <FiLogIn size={22}/>
            <p>Logar</p>
          </NavLink>
          <NavLink to="/cadastro" className="login">
            <GrUserNew size={20}/>
            <p>Cadastrar</p>
          </NavLink>
        </header>
      </aside>
    </div>
  )
}

export function Sidebar() {
  const {auth} = useContext(AuthContext);
  console.log(auth.token)

  return (
      <div>
        { 
          auth.token == null ? <SiderbarNotLogged /> :
          <SiderbarLogged nome={auth.nome}/>   
        }
      </div>
  )
}