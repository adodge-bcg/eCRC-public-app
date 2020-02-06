import reducer, { SET_ORG, SET_APPLICANT, SET_CONSENT } from "./reduceApplicantData";

let state = {
  org: {
    name: "Default",
    type: "Default",
    id: 1
  },
  applicant: {
    name: "Default",
    dob: "Default",
    address: "Default"
  },
  consent: false
}

const resetState = () => {
  state = {
    org: {
      name: "Default",
      type: "Default",
      id: 1
    },
    applicant: {
      name: "Default",
      dob: "Default",
      address: "Default"
    },
    consent: false
  }
}

describe("User Data Reducer", () => {
  beforeEach(() => {
    resetState();
  })

  it("throws an error with unsupported type", () => {
    expect(() => reducer({}, {type: null}))
    .toThrowError( /tried to reduce with unsupported action type/i );
  });

  it("sets org with given data without changing rest of state", () => {
    const result = reducer(state, {type: SET_ORG, value: {name: "Some org", type: "Does a thing", id: 123}});
    expect(result).toEqual({
      org: {
        name: "Some org",
        type: "Does a thing",
        id: 123
      },
      applicant: {
        name: "Default",
        dob: "Default",
        address: "Default"
      },
      consent: false
    })
  });

  it("sets applicant with given data without changing rest of state", () => {
    const result = reducer(state, {type: SET_APPLICANT, value: {name: "Some person", dob: "10/12/1940", address: "432 Somewhere Nanaimo BC V9D 3E4"}});
    expect(result).toEqual({
      org: {
        name: "Default",
        type: "Default",
        id: 1
      },
      applicant: {
        name: "Some person",
        dob: "10/12/1940",
        address: "432 Somewhere Nanaimo BC V9D 3E4"
      },
      consent: false
    })
  });

  it("sets consent with given consent without changing rest of state", () => {
    const result = reducer(state, {type: SET_CONSENT, value: true});
    expect(result).toEqual({
      org: {
        name: "Default",
        type: "Default",
        id: 1
      },
      applicant: {
        name: "Default",
        dob: "Default",
        address: "Default"
      },
      consent: true
    })
  });
})