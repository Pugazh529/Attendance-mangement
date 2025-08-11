import React from 'react'
import Sidebar from '../navbar/Sidebar';
import Attendancecontent from './Attendancecontent';


function Attendance() {


  return (
    <div className='d-flex vh-100'>
      <div className='bg-info w-20'><Sidebar/></div>
      <div className=' w-50'><Attendancecontent/></div>
      <div className='w-30 profile'>Profile</div>
    </div>

  );
}

export default Attendance