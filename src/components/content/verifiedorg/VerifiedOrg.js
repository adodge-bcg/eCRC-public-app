import React from 'react';

export default function VerifyOrg(props) {
  return (
    <div>
      <p>The org {props.org} is verified.</p>

      <button onClick={() => props.confirmOrg()}>Confirm</button>

      <p>TODO: display org information (from props) button to Content -> ToS</p>
    </div>
  )
}