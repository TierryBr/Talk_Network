import React from 'react';

import { FormCadastro } from '../pages/FormCadastro';
import { Sidebar } from './Sidebar';

import '../styles/pageFeed.scss';

export function PageCadastro() {
  return (
    <div className="application">
      <Sidebar />
      <FormCadastro />
    </div>
  )

}