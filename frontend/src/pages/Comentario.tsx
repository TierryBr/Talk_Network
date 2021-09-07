import React, { useContext, useEffect, useState } from 'react';
import {AiOutlineComment} from 'react-icons/ai'

import { inserirComentario, listarComentariosPorId } from '../services/comentarios';
import '../styles/post.scss';
import { AuthContext } from '../App';
import { useForm } from 'react-hook-form';

export function Comentario(post: any) {
  
  const [comentarios, setComentarios] = useState([]);
  
  const {register, handleSubmit} = useForm();
  const {auth} = useContext(AuthContext);
  
  const updateComentarios = () => {
    listarComentariosPorId(auth.token, post.posts.id)
    .then((res) => {
      setComentarios(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    updateComentarios();
  }, [])


  const submeter = (texto: any) => { 
    // console.log(texto.id_post)
    // console.log(texto.texto)
    // console.log(auth.token)
    inserirComentario(auth.token, post.posts.id, texto.texto)
    .then((res) => {
      updateComentarios();
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      {comentarios.map((comentario: any) => (
        <div className="commentaries">
          <p className="comment-name">{comentario.usuario.nome}</p>
          <p>{comentario.texto}</p>
        </div>
      ))}

      <form className="input-block" onSubmit={handleSubmit(submeter)}>
        <label htmlFor="text">Comentar postagem de {post.posts.usuario.nome} -<span>Máximo de 300 caracteres</span></label>
        <input type="text" maxLength={300} value={post.posts.id} style={{display: "none"}} {...register("id_post")}/>
        <textarea id="comment" maxLength={300} {...register("texto")}/>

        <button className="comment">
          <AiOutlineComment size={20}/>
          Comentar
        </button>
      </form>
    </>
  )
}