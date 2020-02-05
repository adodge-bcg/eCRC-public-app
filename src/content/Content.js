import React, { useState } from 'react';
import axios from 'axios';

import './Content.scss';
import Landing from './landing/Landing';
import VerifyOrg from './verifyorg/VerifyOrg';

const LANDING = "LANDING";
const VERIFYORG = "VERIFYORG";

export default function Content(props) {
  const [state, setState] = useState(0);
  const [mode, setMode] = useState(LANDING);

  const validate = (orgId) => {
    axios.get(`/validateorg?org=${orgId}`)
    .then(res => {
      console.log(res);

      if (res.data.bscsorg === '1') {
        console.log('WE VRED');
        setMode(VERIFYORG);
      }
    })



    console.log(`Org id: ${orgId}`)
  }

  return (
    <div>
      <p>This is Content.</p>
      {mode === LANDING && (<Landing onValidate={validate} />)}
      {mode === VERIFYORG && <VerifyOrg />}
      <p>End of Content</p>
    </div>
  )
}