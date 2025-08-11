import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

function Login() {

  const { login } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');

  const Handleclick = (e) => {
    e.preventDefault()
    let user = JSON.parse(localStorage.getItem('user'));

    // console.log(name);
    if (user && user.username == name && user.password == pass) {
      login();
    }
    else {
      setErr('Invalid Username or password')
    }

  }
  return (

    <div className='container mt-4'>
      <h1 className='text-center'>Employee Login Page</h1>
      <div className="form d-flex justify-content-center align-items-center m-5 ">
        <form className='p-5'>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e) => { setPass(e.target.value) }} />
          </div>
          {err && <div className="text-danger">{err}</div>}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" >Check me out</label>
          </div>
          <button className="btn btn-primary" onClick={(e) => Handleclick(e)}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login