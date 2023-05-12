import React from 'react'
import { user } from '../dummyData'
import './Rightbar.css'

export default function Rightbar() {
  return (
    <div class="containerRight">
        <div class="row">
            <div class="col" >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJaQq1XsnLl0WstueGTmYUseLe5aARJGr3g&usqp=CAU' style={{ width: "50px", height: "50px",  }}></img>
                <small >Pola Foster and 3 friends have a birthday </small>
                <div class="col-sm-12">
                <div class="card text-bg-dark">
                     <img src="https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" id='blur' class="card-img" alt="..."/>
                     <div class="card-img-overlay">
                         {/* <h5 class="card-title">Card title</h5> */}
                         <h3 class="card-text">Cold & Smoothy.</h3>
                         {/* <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
                         </div>
                        
                        </div> <br></br>
                        <b >Online Friends</b> <br></br>
                        
                        {user.map((data)=>(
                        <div>
                          
  <img src={data.photo} style={{width:"25px",height:"25px",borderRadius:"50%" }}></img>
   {data.name} 

  
  <label style={{fontSize:"14px"}}></label>
</div>
))}
{/* <div >
  <img src='https://m.media-amazon.com/images/M/MV5BZmIyM2Q5MjctMDRlMi00Y2FhLWJkMzQtMzAyMzc3MjhmZGJiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg' style={{width:"25px",height:"25px",borderRadius:"50%"}}></img>
  <label style={{fontSize:"14px"}}>Mia</label>
</div>
<div>
  <img src='https://w0.peakpx.com/wallpaper/438/681/HD-wallpaper-genelia-dsouza-actress-bollywood-diva-dsouza-galaxy-genelia-new-note.jpg' style={{width:"25px",height:"25px",borderRadius:"50%", paddingTop:"2px"}}></img>
  <label style={{fontSize:"14px"}}>Alex Derdun</label>
</div>
<div>
  <img src='https://nationaltoday.com/wp-content/uploads/2022/10/456840991-min.jpg' style={{width:"25px",height:"25px",borderRadius:"50%", paddingTop:"2px"}} ></img>
  <label style={{fontSize:"14px"}}>Jane</label>
</div> */}

                    </div>
                
            </div>
        </div>
    </div>
  )
}
