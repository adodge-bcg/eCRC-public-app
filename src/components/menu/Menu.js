import React, { useEffect, useState } from 'react';

import axios from 'axios';

import MenuItem from './menuitem/MenuItem';

export default function Menu(props) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get("/links")
    .then(res => {
      console.log(res.data);
  
      const menuList = res.data.map((menuItem) => {
        console.log(menuItem);
        return <MenuItem url={menuItem.url} name={menuItem.name} />
      });
  
      setMenu(menuList);
    });

  }, []);


  return (
    <nav>
      {menu}
    </nav>
  )
};