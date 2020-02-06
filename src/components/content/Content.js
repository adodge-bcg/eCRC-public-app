import React, { useState } from 'react';
import axios from 'axios';

import './Content.scss';
import Landing from './landing/Landing';
import VerifiedOrg from './verifiedorg/VerifiedOrg';
import UnverifiedOrg from './unverifiedorg/UnverifiedOrg';
import TermsofService from './termsofservice/TermsofService';
import ConsentForm from './consentform/ConsentForm';
import ApplicationForm from './applicationform/ApplicationForm';
import InformationReview from './informationreview/InformationReview';

import useApplicantData from '../../hooks/useApplicantData';

const LANDING = "LANDING";
const VERIFIEDORG = "VERIFIEDORG";
const UNVERIFIEDORG = "UNVERIFIEDORG";
const TERMSOFSERVICE = "TERMSOFSERVICE";
const CONSENTFORM = "CONSENTFORM";
const APPLICATIONFORM = "APPLICATIONFORM";
const INFORMATIONREVIEW = "INFORMATIONREVIEW";

//CONFIRM WHAT WE GET, format, etc. THIS IS JUST FOR TESTING!
const applicant = {
  firstName: "Test",
  lastName: "Subject",
  dob: "10/12/1940",
  address: "123 Somewhere Nananimo, BC V9E 2E3"
}

export default function Content(props) {
  const [mode, setMode] = useState(LANDING);
  const {state, setSessionId, setOrg, setApplicant, setConsent} = useApplicantData();

  const validateOrg = (orgId) => {
    axios.get(`/validateorg?org=${orgId}`)
    .then(res => {
      if (res.data.bscsorg === '1') {
        setOrg({orgId, name: "Some Org"});
        setMode(VERIFIEDORG);
      } else if (res.data.bscsorg === '0') {
        setMode(UNVERIFIEDORG);
      } else {
        //TODO: Set error for invalid org code
      }
    })
  }

  const confirmOrg = () => {

    //TODO: Keycloak to BCSC...and return...get applicant info from BCSC, save to state
    setApplicant(applicant);


    setMode(APPLICATIONFORM);
  }

  return (
    <main>
      <p>This is Content.</p>
      {mode === LANDING && <Landing onValidate={validateOrg} />}
      {mode === VERIFIEDORG && <VerifiedOrg org={state.org} confirmOrg={confirmOrg} />}
      {mode === UNVERIFIEDORG && <UnverifiedOrg />}
      {mode === TERMSOFSERVICE && <TermsofService />}
      {mode === CONSENTFORM && <ConsentForm />}
      {mode === APPLICATIONFORM && <ApplicationForm applicant={state.applicant} />}
      {mode === INFORMATIONREVIEW && <InformationReview />}
      <p>End of Content</p>
    </main>
  )
}