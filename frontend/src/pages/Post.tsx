import React, { useContext, useEffect, useState } from 'react';

import { listarPosts } from '../services/posts';
import '../styles/post.scss';
import { AuthContext } from '../App';
import { Feed } from './Feed';

export function Post(props: any) {
  const {auth} = useContext(AuthContext);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    listarPosts(auth.token)
    .then((res) => {
      setPosts(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <Feed posts={posts}/>
  )
}