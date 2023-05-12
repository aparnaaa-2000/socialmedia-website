import React, { useState } from 'react'
// import Signup from './Signup';
// import  './Signup.css'


export default function Signup() {
  const[state,setState]=useState({})
  const data = ()=>{
    setState()
  }
  const [newdata,setdata]= useState({});
   const setRegister =(event)=>{
    const name =event.target.name;
    const value =event.target.value;
    setdata({...newdata,[name]:value})
    
   }
   
    console.log(newdata);
  return (
    <React.Fragment>

      <div class="container-fluid">
        <div class="row">
          <div class="col" id="facebook">
            {/* <label class="facebook" ><h1 onChange={setRegister}>Facebook{newdata}</h1></label> */}
            <label>Connect with friends and the world around you on Lamasocial</label>
          </div>
          <div class="col">
          <div class="form-floating mb-3">
  <input type="username" onChange={setRegister} name="username1" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Username</label>
</div>
<div class="form-floating">
  <input type="email" class="form-control" onChange={setRegister} id="floatingPassword" name='email2' placeholder="Password"/>
  <label for="floatingPassword">Email</label>
</div>
<div class="form-floating mb-3">
  <input type="password" class="form-control" onChange={setRegister} id="floatingInput" name='password' placeholder="name@example.com"/>
  <label for="floatingInput">Password</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" onChange={setRegister}  id="floatingPassword" name='password again' placeholder="Password"/>
  <label for="floatingPassword">Password again</label>
</div>
<div >
<button type="button" class="btn btn-primary">Primary</button>
</div>
          </div>
          

        </div>
      </div>

    </React.Fragment>
  )
}
