import React from 'react';

import Crumb from './crumb/Crumb';

const crumbs = ["These", "Are", "Crumbs"];

export default function Breadcrumbs(props) {

  const breadcrumbs = crumbs.map((crumb) => {
    console.log(crumb);
    return <Crumb crumb={crumb} />;
  });

  const bread = breadcrumbs.join(" > ")

  return (
    <div>
      {breadcrumbs}
    </div>
  )
}