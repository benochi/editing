import ExampleForm from "../forms/ExampleForm";
import { React, useState } from "react";
import { MDBBadge, MDBBtn, MDBTypography, MDBCollapse } from 'mdb-react-ui-kit';

export default function Profile(){
  const [username, setUsername] = useState("Bob")
  const [alerts, setAlerts] = useState(4)
  const [editing, setEditing] = useState(true)
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);
  const editClick = () => setEditing(!editing)

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
        <MDBBtn className="m-2 col-1" onClick={toggleShow}>
          Alerts
          <MDBBadge className='ms-2' color='danger'>
            {alerts}
          </MDBBadge>
          <span className='visually-hidden'>unread messages</span>
          <div className='d-flex justify-content-center flex-sm-fill'>
            <MDBCollapse show={showShow} className="bg-white text-black p-2 m-2">
              This is where alerts could appear. lets see how this formats as I click on it!
              You could put alerts into a list and cycle through them, or add arrows to the button and move up and down through the list!  
            </MDBCollapse>
          </div>
        </MDBBtn>  
      <div>
      <MDBBtn className="m-2" onClick={editClick}>
        EDIT
        <MDBBadge className='' color='danger'>
          {editing}
        </MDBBadge>
      </MDBBtn>
      </div>
    </div>
    : <ExampleForm 
        editClick={editClick}
        setUsername={setUsername}
        setAlerts={setAlerts}
      />}
    </div>
  );
}