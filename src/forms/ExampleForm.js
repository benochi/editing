import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function ExampleForm({editClick, setUsername}) {
  function handleSubmit(e){
    e.preventDefault();
    console.log(e.target[0].value)
    setUsername(e.target[0].value)
    editClick()

  }

  return (
    <form className="d-grid p-2 justify-content-center" onSubmit={handleSubmit}>
      <MDBInput className='mb-4' type='username' id='form1Example1' label='Username' />
      <MDBBtn type='submit' block>
        Finish Edit
      </MDBBtn>
    </form>
  );
}