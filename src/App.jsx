import React, { useContext, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login/Login'
import Attendance from './components/Attendance/Attendance'
import { useState } from 'react'
import { AuthContext } from './context/AuthContext'


function App() {
    
        const {isLogin} =useContext(AuthContext);

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify({username:'Pugazh',password:'1234'}));
    },[])

    return (
        <Router>
            <Routes>
                <Route path="/" element={isLogin ? <Navigate to="/attendance" /> : <Login />} />
                <Route path="/attendance" element={isLogin ? <Attendance /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    )
}

export default App