import React, { useState,useEffect } from "react";
import '../admin.css';
import {BsPersonCircle} from 'react-icons/bs'
import {BsThreeDots} from 'react-icons/bs'
//import { red } from "@mui/material/colors";
import {IoMdAddCircle} from 'react-icons/io'
import Axios, * as others from 'axios';
import axios from "axios";
import { BiX } from "react-icons/bi";

const reload = () =>{
  location.reload();
}
const alternatingColor = [ ' #FFFFFF ', " #F4F2EE"]
function DataPost({posts}) {
  
  const deletePost = (post)=>{
    Axios.delete(`http://localhost:8800/admin/description/delete/${post}`, posts)
    Axios.delete(`http://localhost:8800/admin/like/delete/${post}`, posts)
    Axios.delete(`http://localhost:8800/admin/delete/${post}`, posts)

    reload()
  }
  const checkPost = (post)=>{
    Axios.put(`http://localhost:8800/admin/user/update/${post}`, posts)
    reload()
  }
    return (
      <>
        {posts.map((posts, id) => {
         console.log(posts)
          return (
            <div  className="data-post" key={posts.id} style={{backgroundColor: alternatingColor[id % 2] }}>
              <div className="user-name">
              <img class="avatar-data" src={posts.image}/>
                <a href=""><div class="usename-data">{posts.userName}</div></a>
              </div>
               
                <a href=""><div class="title-data">{posts.postName}</div></a>
                <div className="createat-data" >{posts.dateTime}</div>
                <div /*onClick={() => setCurrentStatus('ok')} */className="status-data" style={{backgroundColor: posts.status === "pending" ? "#f1bc68" : "indianred"}} >{posts.status} </div>
                <BiX/>

                {/* <div className="dropdown">
                     <div className="option-data" ><BsThreeDots/></div>
                     <div className="dropdown-content">
                       <ul className="dropdown-option">
                        <li><button onClick={() => checkPost(posts.idPost)} className="check-btn" href="#">Check</button></li>
                        <li><button className="edit-btn">edit</button></li>
                        <li><button onClick={() => deletePost(posts.idPost)} className="delete-btn" href="#">Delete</button></li>
                       </ul>
                     </div>
                </div> */}
            </div>
          );
        })}
      </>
    );
  }
  
  export default DataPost;

 export function DataUser ({user}) {

  
  const deleteUser = (u)=>{
    // Axios.delete(`http://localhost:8800/admin/description/delete/${p}`, posts)
    // Axios.delete(`http://localhost:8800/admin/like/delete/${p}`, posts)
    // Axios.delete(`http://localhost:8800/admin/delete/${p}`,posts)
    Axios.delete(`http://localhost:8800/admin/user/delete/${u}`, user)
    reload()
    
  }
    return (
      <>
     
        {user.map((user, id) => {
          return (
           
            <div  className='user-data' key={user.id} style={{backgroundColor: alternatingColor[id % 2] }}>
              <div className="user-item">
              <img className="avatar-user" src={user.avatar}/>
              <a href='#'><div className='usename'>{user.userName}</div></a>
              </div>
              
              <div className='gender user-item'>{user.gender}</div>
              <div className='mail user-item'>{user.gmail}</div>
              <div className='phone user-item'>{user.phoneNumber}</div>
              <div className='account user-item'>{user.accountType}</div>
              {/* <div className="dropdown">
                     <div className="option-data" ><BsThreeDots/></div>
                     <div className="dropdown-content" >
                       <ul className="dropdown-option-user">
                        <div className='add-mod'>
                        <li><button className="edit-btn" >Edit</button></li>
                        </div>
                        <li><button onClick={()=>{deleteUser(user.userName)}} className="delete-btn" href="#">Delete</button></li>
                       </ul>
                     </div>
                </div> */}
                <BiX/>
                
            </div> 
          );
        })}
      </>
    );
  }


  
   
  