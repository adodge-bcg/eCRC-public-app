import reducer, { SET_ORG, SET_APPLICANT, SET_CONSENT } from "./reduceApplicantData";

describe("User Data Reducer", () => {
  it("throws an error with unsupported type", () => {
    expect(() => reducer({}, {type: null}))
    .toThrowError( /tried to reduce with unsupported action type/i );
  });

  it("sets org with given data", () => {
    const result = reducer({}, {type: SET_ORG, value: {name: "Some org", type: "Does a thing", id: 123}});
    expect(result).toEqual(
      expect.objectContaining({
        org: {
        name: "Some org",
        type: "Does a thing",
        id: 123
      }})
    )
  });

  it("sets applicant with given data", () => {
    const result = reducer({}, {type: SET_APPLICANT, value: {name: "Some person", dob: "10/12/1940", address: "432 Somewhere Nanaimo BC V9D 3E4"}});
    expect(result).toEqual(
      expect.objectContaining({
        applicant: {
          name: "Some person",
          dob: "10/12/1940",
          address: "432 Somewhere Nanaimo BC V9D 3E4"
        }
      })
    )
  });

  it("sets consent with given consent", () => {
    const result = reducer({}, {type: SET_CONSENT, value: true});
    expect(result).toEqual({
      consent: true
    })
  });
})