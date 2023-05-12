import React from 'react'
import './Middlebar.css'

export default function containerMiddle () {
  return (
    <div class="containerMiddle" >
      <div class="row">
        <div class="col">
        
  <div class="col-lg-12 mb-3 mb-sm-0" id='middle'>
    <div class="card">
      <div class="card-body">
        <img src='https://pbs.twimg.com/profile_images/1009469376490192896/hW_ZFLHm_400x400.jpg' style={{ width: "30px", height: "30px", borderRadius: "50%" }}></img>
        <small class="text-muted"> What's in your mind Safak?</small> <br></br>
        <line class="text-muted">_________________________________________________________________________________</line>
        {/* <h5 class="card-title">Special title treatment</h5> */}
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <div class="row">
          <div class="col-sm-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" id='photos' style={{ direction:"inherit"}} class="bi bi-images" viewBox="0 0 16 16">
            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
            </svg><span style={{fontSize:"10px"}}>  Photos or videos</span> 
            </div>
          <div class="col-sm-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" id='tag' class="bi bi-tags-fill" viewBox="0 0 16 16">
              <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
              <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z"/>
            </svg>
            <span style={{fontSize:"10px"}}> Tag</span>
            </div>

            <div class="col-sm-2" id='location'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Green" class="bi bi-geo-alt-fill"  style={{direction:"inherit"}}  viewBox="0 0 16 16">
               <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
               </svg>
               <span style={{fontSize:"10px"}}> Location</span>
          
            </div>
            <div class="col-sm-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-emoji-laughing-fill" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5c-.218 0-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5zm5.331 3a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zm-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5c-.218 0-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235z"/>
              </svg>
              <span style={{fontSize:"10px"}}> Feelings</span>

            </div>


          </div>
          <div class="col" id="share"  >
        <a href="#" class="btn btn-success">Share</a></div>
      </div>
    </div>
  </div>
        </div>
      </div>
    </div>
  )
}

