import React, { useState } from 'react'
// import {post} from '../dummyData'
import "./Post.css"

export default function Postnew({details}) {
    console.log("details====>",details.like)
    const[Like,setLike]=useState(details.like) 
    const[IsLike,setIsLike]=useState(false)

   const likeHandler =()=>{
        setLike(IsLike==true ? Like-1 : Like+1)
        setIsLike(!IsLike)
       
      
    }

    

  return (
    <div class="row"  >
<div class="col" id='post' >
   
    <div class="card" id='main2'>
        
        <div class="card-body" id="main">
            <img src={details.photo} style={{ width: "30px", height: "30px", borderRadius: "50%" }}></img>  {details.name}
            <small class="text-muted"> {details.date}</small>

            <p class="card-text">Living the life.Love for all,Hatred for none</p>
            {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}

        </div>
        <img src={details.photo} class="card-img-bottom" alt="..." />
        <div style={{ display: "flex", padding: "0px" }}><div></div>
        

            <div class="like " ><svg xmlns="http://www.w3.org/2000/svg" width="20" onClick={likeHandler} height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg> <br/>
            {Like}</div>
            <div id='comment'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                </svg>
            </div>
            <div class="share">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
            </div>

        </div>
    </div>

</div>
</div>

  )
}
