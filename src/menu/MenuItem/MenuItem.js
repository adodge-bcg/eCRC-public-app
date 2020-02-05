import React from 'react';

export default function MenuItem(props) {
  return (
    <div>
      <a href={props.url}>{props.name}</a>
    </div>
  )
}