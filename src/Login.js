import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
// import Login from './Login';
import { useState } from 'react';

export default function Login() {
  const [data,setdata] =useState({});

  const setRegister =(event) =>{
    const name = event.target.name;
    const value = event.target.value;
    
    setdata({...data,[name]:value})
  }
  console.log("user===>",data)
  const submitb = (e)=>{
    e.preventDefault()
    console.log("username===>",data);
  // setUser (data)
  }
  



  return (
    <React.Fragment>
    <div className='containerLogin'>
      <div className='row'>
        <div className='col-sm-3'>
          <h1 id='facebook'>Facebook</h1>
          <p>Connect with friends</p>
        </div>
        <div className='col-sm-4' >
          <form>
          <div class="form-floating mb-3" >
  <input type="email" class="form-control" id="floatingInput" name='email' onChange={setRegister} placeholder="email"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" name='password' onChange={setRegister} placeholder="Password"/>
  <label for="floatingPassword">Password</label>
  <div><button type="button" onClick={submitb} class="btn btn-primary">Primary</button></div>
</div>
          </form>
        </div>
        
      </div>
    </div>
    </React.Fragment>
  )
}
