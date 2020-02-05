import React from 'react';

import MenuItem from './MenuItem/MenuItem';

export default function Menu(props) {
  const menuList = props.menuItems.map((menuItem) => {
    return <MenuItem url={menuItem.url} name={menuItem.name} />
  });

  return (
    <div>
      {menuList}
    </div>
  )
}