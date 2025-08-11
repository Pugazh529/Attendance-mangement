import React from 'react'
import Sidebar from './Sidebar';
import Attendancecontent from './Attendancecontent';


function Attendance() {


  return (
    <div className='d-flex vh-100'>
      <div className='bg-info w-25'><Sidebar/></div>
      <div className='bg-danger w-50'><Attendancecontent/></div>
      <div className='bg-primary w-25 '>Profile</div>
    </div>

  );
}

export default Attendance