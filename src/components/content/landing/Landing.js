import React, { useState } from 'react';

export default function Landing(props) {
  const [orgId, setOrgId] = useState("");

  return (
    <div>
      <p>This is the landing Page</p>
      <form onSubmit={event => event.preventDefault()}>
        <input name="orgId" type="text" value={orgId} onChange={event => setOrgId(event.target.value)} />
      </form>
      <button onClick={() => props.onValidate(orgId)}>Submit</button>

      <p>TODO: Text about BCSC, note about transition period?</p>
    </div>
  )
}