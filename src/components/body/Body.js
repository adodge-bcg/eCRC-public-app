import React from 'react';

import './Body.scss';
import Menu from '../menu/Menu';
import Content from '../content/Content';

const menuList = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Gov',
    url: 'gov.bc.ca'
  }
]


export default function Body(props) {
  return (
    <main className="main">
      <Menu menuItems={menuList} />
      <Content />
    </main>
  )
}