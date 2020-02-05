import React, { useState } from 'react';
import axios from 'axios';

import './Content.scss';
import Landing from './landing/Landing';
import VerifiedOrg from './verifiedorg/VerifiedOrg';
import UnverifiedOrg from './unverifiedorg/UnverifiedOrg';

const LANDING = "LANDING";
const VERIFIEDORG = "VERIFIEDORG";
const UNVERIFIEDORG = "UNVERIFIEDORG";

export default function Content(props) {
  const [mode, setMode] = useState(LANDING);

  const validate = (orgId) => {
    axios.get(`/validateorg?org=${orgId}`)
    .then(res => {
      if (res.data.bscsorg === '1') {
        setMode(VERIFIEDORG);
      } else if (res.data.bscsorg === '0') {
        setMode(UNVERIFIEDORG);
      } else {
        //TODO: Set error for invalid org code
      }
    })

  }

  return (
    <div>
      <p>This is Content.</p>
      {mode === LANDING && <Landing onValidate={validate} />}
      {mode === VERIFIEDORG && <VerifiedOrg />}
      {mode === UNVERIFIEDORG && <UnverifiedOrg />}
      <p>End of Content</p>
    </div>
  )
}