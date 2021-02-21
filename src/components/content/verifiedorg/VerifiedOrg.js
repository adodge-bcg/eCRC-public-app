import React from 'react';

export default function VerifyOrg(props) {
  return (
    <div>
      <p>The org {props.org.name} is verified.</p>

      <p>Display like:</p>
      {props.org.name}
      <p>Or like:</p>
      <input className="form-control" type="text" placeholder={props.org.name} disabled />

      <button onClick={() => props.confirmOrg()}>Confirm</button>

      <p>TODO: display org information (from props) button to Content -> ToS</p>
    </div>
  )
}