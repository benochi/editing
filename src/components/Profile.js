import ExampleForm from "../forms/ExampleForm";
import { React, useState } from "react";
import { MDBBadge, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

export default function Profile(){
  const [username, setUsername] = useState("Bob")
  const [alerts, setAlerts] = useState(4)
  const [editing, setEditing] = useState(true)

  function alertClick(){
    setAlerts(alerts + 1)
  }

  function editClick(){
    setEditing(!editing)
  }

  return (
    <div>
    {editing ?
    <div className="d-flex p-2 justify-content-center">
      <MDBTypography tag='h3' className='mb-0'>
        User: {username}<br></br>
        <MDBTypography tag='small' className='text-muted'>
          Totally the most L337 user
        </MDBTypography>
      </MDBTypography>
      <MDBBtn className="m-2" onClick={alertClick}>
        Alerts
        <MDBBadge className='ms-2' color='danger'>
          {alerts}
        </MDBBadge>
        <span className='visually-hidden'>unread messages</span>
      </MDBBtn>
      <MDBBtn className="m-2" onClick={editClick}>
        EDIT
        <MDBBadge className='ms-2' color='danger'>
          {editing}
        </MDBBadge>
        <span className='visually-hidden'>unread messages</span>
      </MDBBtn>
    </div>
    : <ExampleForm 
        editClick={editClick}
        setUsername={setUsername}
      />}
    </div>
  );
}