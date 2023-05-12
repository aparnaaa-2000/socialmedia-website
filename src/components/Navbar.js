import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
    <>
    {/* <div className='containerNav'> */}
    <div class="row">
        <div class="col">
    <nav class="navbar" id='nav'>
  <form class="containerNav "  >
    <div class="input-group" >
    <div id="navbar-alighn" >
      <div style={{flex:1}} ><h5>Mai-Tweet</h5></div>
      <input type="text" style={{flex:3,borderRadius:"20px", paddingRight:"20px" }} id='align' class="form-control" placeholder="Search for friend, post or video "  aria-label="Username" />
      <div class="col" style={{flex:1,}} id='profile'> Profile</div>
      <div class="col" style={{flex:1 , paddingRight:"0px"}} >Home</div>
      <div class="col" id='=person'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg></div>
<div class="col"><svg xmlns="http://www.w3.org/2000/svg" width="16" style={{flex:1, paddingLeft:"0px"}} height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
</svg></div>
<div class="col"><svg xmlns="http://www.w3.org/2000/svg" width="16" style={{flex:2,paddingRight:"20px"}} height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg></div>
      
      </div>
    </div>
  </form>
</nav>
</div>

</div>


            

    {/* </div> */}
    </>
  )
}


