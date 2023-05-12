import React from 'react'
import "./Post.css"
import {post} from '../dummyData'
import Postnew from './Postnew';

// import {post} from "../..dummyData";

export default function Post() {
    console.log(post);
    return (
        <div class="container-fluid" >
            {post.map((data)=>(
                <Postnew details={data}/>
                ))}      
        </div>
        
       

    
)}

