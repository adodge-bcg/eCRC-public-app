import { useReducer } from 'react';

import reducer, {SET_ORG, SET_APPLICANT, SET_CONSENT, SET_SESSION_ID} from '../reducers/reduceApplicantData';

export default function useApplicantData() {
  const [state, dispatch] = useReducer(reducer, {
    org: {},
    applicant: {},
    consent: false
  });

  const setSessionId = (sessionId) => {
    dispatch({type: SET_SESSION_ID, value: sessionId});
  }

  const setOrg = (org) => {
    dispatch({type: SET_ORG, value: org});
  };

  const setApplicant = (applicant) => {
    dispatch({type: SET_APPLICANT, value: applicant});
  };

  const setConsent = (consent) => {
    dispatch({type: SET_CONSENT, value: consent});
  };

  return {state, setSessionId, setOrg, setApplicant, setConsent};
};