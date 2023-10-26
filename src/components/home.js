import React from 'react';
import "./home.css";
import {BsPrinterFill} from "react-icons/bs";
import profilepic from '../assets/images/profilepic.jpg'

export const Home = () =>{
   return (
    <div>
          <div style={{ display:"flex", width:"100%", height:"70vh", alignItems:"center", paddingLeft:"10%"}}>
            <div style={{width:"60%"}}>
               <div style={{fontSize:"300%", fontWeight:"normal"}}>Hello, I am </div>
               <div style={{fontSize:"700%", fontWeight:"bold"}}>Akash Sharma</div>
               <div style={{fontSize:"300%", fontWeight:"normal"}}>Frontend Developer</div>
               <a style={{textDecoration:"none"}} href={"https://drive.google.com/file/d/1ryGESGfeOdZrDqSd8zbcaKsaD7ClBOru/view?usp=drive_link"} download>
               <button className='printButton'>
                  <div style={{marginRight:"2%", paddingTop:"0.5%"}}><BsPrinterFill size={14}/></div>
                   Print Resume
                  </button>
               </a>
             </div>
             <div style={{paddingLeft:"8%"}}>
               <img style={{width:"60%", height:"60%", borderRadius:"50%"}} src={profilepic} alt='profilePic'></img>
             </div>
      </div>
    </div>  
   )
}