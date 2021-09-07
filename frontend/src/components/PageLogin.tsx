import React from 'react';

import '../styles/sidebar.scss';
import { FormLogin } from '../pages/FormLogin';
import { Sidebar } from './Sidebar';

import '../styles/pageFeed.scss';

export function PageLogin() {
  return (
    <div className="application">
      <Sidebar />
      <FormLogin />
    </div>
  )

}