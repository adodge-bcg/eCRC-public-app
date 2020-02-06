import React, { useState } from 'react';
import axios from 'axios';

import './Content.scss';
import Landing from './landing/Landing';
import VerifiedOrg from './verifiedorg/VerifiedOrg';
import UnverifiedOrg from './unverifiedorg/UnverifiedOrg';
import TermsofService from './termsofservice/TermsofService';
import ApplicationForm from './applicationform/ApplicationForm';
import ConsentForm from './consentform/ConsentForm';

import useApplicantData from '../../hooks/useApplicantData';

const LANDING = "LANDING";
const VERIFIEDORG = "VERIFIEDORG";
const UNVERIFIEDORG = "UNVERIFIEDORG";
const TERMSOFSERVICE = "TERMSOFSERVICE";
const APPLICATIONFORM = "APPLICATIONFORM";
const CONSENTFORM = "CONSENTFORM";

export default function Content(props) {
  const [mode, setMode] = useState(LANDING);
  const {state, setOrg, setApplicant, setConsent} = useApplicantData();

  const validate = (orgId) => {
    axios.get(`/validateorg?org=${orgId}`)
    .then(res => {
      if (res.data.bscsorg === '1') {
        setOrg(orgId);
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
      {mode === VERIFIEDORG && <VerifiedOrg org={state.org} />}
      {mode === UNVERIFIEDORG && <UnverifiedOrg />}
      {mode === TERMSOFSERVICE && <TermsofService />}
      {mode === APPLICATIONFORM && <ApplicationForm />}
      {mode === CONSENTFORM && <ConsentForm />}
      <p>End of Content</p>
    </div>
  )
}