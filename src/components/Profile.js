import ExampleForm from "../forms/ExampleForm";
import React from "react";
import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';

export default function Profile(){


  return (
    <div className="d-flex p-2 justify-content-center">
      <MDBBtn>
      Profile
      <MDBBadge className='ms-2' color='danger'>
        9
      </MDBBadge>
      <span className='visually-hidden'>unread messages</span>
    </MDBBtn>
    </div>
  );
}