import React from 'react';

import './ApplicationForm.scss';

export default function ApplicationForm(props) {

  return (
    <div>
      This is an application form.

      <div>
        {props.applicant.firstName} {props.applicant.lastName}
      </div>

      <p>TODO: Display applicant information from BCSC, form input for DL#, previous addresses, display org something...</p>
    </div>
  )
}