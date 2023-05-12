import React from 'react'
import Navbar from '../components/Navbar'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Middlebar from '../components/Middlebar';
import Post from '../components/Post';
import './Home.css'
import Postnew from '../components/Postnew';
export default function Home() {
  return (
    <>
    <div>
        <div id="fornav"><Navbar /></div>
        <div class="row" id="forbar">
            <div class="col-lg-3" id="forside"><Sidebar/></div>
            <div class="col-lg-6" ><div id='formiddle'><Middlebar /></div>
            <div id='forpost'><Post /></div>
            
             </div>
            <div class="col-lg-3" id="forright"><Rightbar/></div>
            


        </div>
    
    
    
    
    </div>
    

    
    
    </>
  )
}
