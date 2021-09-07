import React from 'react';

import { FormPost } from '../pages/FormPost';
import { Sidebar } from './Sidebar';

import '../styles/pageFeed.scss';

export function PagePost() {
  return (
    <div className="application">
      <Sidebar />
      <FormPost />
    </div>
  )
}