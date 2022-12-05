import React from 'react';
import {
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function ExampleForm({editClick, setUsername, setAlerts}) {
  function handleSubmit(e){
    e.preventDefault();
    if(e.target.username.value.length > 0){
      setUsername(e.target.username.value)
    }
    if(e.target.alerts.value > 0){
      setAlerts(e.target.alerts.value)
    }
    editClick()
  }

  return (
    <form className="d-grid p-2 justify-content-center" onSubmit={handleSubmit}>
      <MDBInput className='mb-4' type='username' name='username' id='form1Example1' label='Username' />
      <MDBInput className='mb-4' type='alerts' id='form1Example1' name="alerts" label='# of Alerts' />
      <MDBBtn type='submit' block>
        Finish Edit
      </MDBBtn>
    </form>
  );
}