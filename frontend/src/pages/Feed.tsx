import React from 'react';
import {BiCommentAdd, BiLike} from 'react-icons/bi'

import { CgMoreR } from 'react-icons/cg'
import { Link } from 'react-router-dom';

import { Comentario } from './Comentario';

export function Feed({posts, comentarios}: any) {

  return (
    <div id="page-feed">
      <aside className="feed-details">
        <header>
          <h2>TalkNetwork</h2>
          <Link to="/post" className="new-post">
            <BiCommentAdd size={20}/>
            Nova Postagem
          </Link>
        </header>

        <main>
          {posts.map((post: any) => (
            <div className="card">
              <h2>{post.usuario.nome}</h2>
              <p className="write">
                <CgMoreR size={20}/>
                Escreveu
              <p className="likes">
                <BiLike size={20}/>
                {post.likes}
              </p>
              </p>
              <p>{post.texto}</p>
              <button type="button" className="like">
                <BiLike size={20}/>
                Curtir
              </button>

              <Comentario posts={post}/>

            </div>
          ))}
        </main>
      </aside>
    </div>
  );
}