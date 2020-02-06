import React from 'react';

import './Body.scss';
import Menu from '../menu/Menu';
import Content from '../content/Content';

export default function Body(props) {

  return (
    <main className="main">
      <Menu />
      <Content />
    </main>
  )
}