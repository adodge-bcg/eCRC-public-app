export const SET_ORG = "SET_ORG";
export const SET_APPLICANT = "SET_APPLICANT";
export const SET_CONSENT = "SET_CONSENT";

const reducerLookup = {
  SET_ORG: (state, action) => {
    console.log(`Org id: ${action.value}`)
    return {
      ...state,
      org: action.value
    };
  },
  SET_APPLICANT: (state, action) => {
    return {
      ...state,
      applicant: action.value
    };
  },
  SET_CONSENT: (state, action) => {
    return {
      ...state,
      consent: action.value
    };
  }
};

export default function reducer(state, action) {
  if (reducerLookup[action.type]) {
    return reducerLookup[action.type](state, action);
  }

  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
};