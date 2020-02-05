import React from 'react';

import Crumb from './crumb/Crumb';

export default function Breadcrumbs(props) {

  return (
    <div>
      <Crumb crumb="These" />
      <Crumb crumb="Are" />
      <Crumb crumb="Crumbs" />
    </div>
  )
}