import React from 'react';

import { Post } from '../pages/Post';
import { Sidebar } from './Sidebar';

import '../styles/pageFeed.scss';

export function PageFeed() {
  return (
    <div className="application">
      <Sidebar />
      <Post />
    </div>
  )
}