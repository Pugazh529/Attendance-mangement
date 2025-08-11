import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Sidebar() {
   const navigate = useNavigate();

    const {logout} = useContext(AuthContext);

  const handleLogout = () => {
        // localStorage.removeItem("IsLoggin");
        // window.location.href = "/";
        localStorage.setItem('IsLoggin', 'false');
        logout();
        navigate('/');
    };
  return (
    <div className='d-flex flex-column justify-content-evenly m-3' style={{cursor:'pointer'}}>
      <div><h1>Employee Detalis</h1></div>
      <div className='mt-3'><i className="bi bi-person-square"></i> Profile</div>
      <div className='mt-3'><i className="bi bi-gift"></i>Attendance</div>
      <div onClick={handleLogout} className='mt-3'><i className="bi bi-box-arrow-left"></i> LogOut</div>
    </div>
  )
}

export default Sidebar