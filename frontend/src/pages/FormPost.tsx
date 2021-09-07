import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {BiCommentAdd} from 'react-icons/bi'
import { CgMoreR } from 'react-icons/cg'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../App';
import { inserirPosts } from '../services/posts';

import '../styles/formpost.scss';

export function FormPost() {

  const {register, handleSubmit} = useForm();
  const {auth} = useContext(AuthContext);
  let history = useHistory();
  const likes = 0;
  //const [posts, setPosts] = useState([]);


  const submeter = (texto: any) => { 
    console.log(texto)
    inserirPosts(auth.token, texto.texto, texto.likes)
    .then((res) => {
      console.log(res);
      history.push('/feed')
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div id="page-feed">
      <aside className="feed-details">
        <main>
            <div className="card">
              <h2>Publicar um post</h2>
              <p className="write">
                <CgMoreR size={20}/>
                Post
              </p>
              <form className="input-block" onSubmit={handleSubmit(submeter)}>
                  <label htmlFor="text"> <span>Máximo de 300 caracteres</span></label>
                  <input type="text" maxLength={300} value={likes} style={{display: "none"}} {...register("likes")}/>

                  <textarea id="name" maxLength={300} {...register("texto")}/>
                <button className="comment">
                  <BiCommentAdd size={20}/>
                  Publicar
                </button>
              </form>
            </div>
        </main>
      </aside>
    </div>
  );
}