import React, { useState,useEffect } from "react";
import '../admin.css';
import {BsPersonCircle} from 'react-icons/bs'
import {BsThreeDots} from 'react-icons/bs'
//import { red } from "@mui/material/colors";
import {IoMdAddCircle} from 'react-icons/io'
import Axios, * as others from 'axios';

const alternatingColor = [ ' #FFFFFF ', " #F4F2EE"]
function DataPost({posts}) {
  //console.log(posts[0].status)
  // const [currentStatus, setCurrentStatus] = useState()

  const deletePost = (post)=>{
    alert('do you want to delete this post')
    Axios.delete(`http://localhost:8800/admin/description/delete/${post}`, posts)
    Axios.delete(`http://localhost:8800/admin/like/delete/${post}`, posts)
    Axios.delete(`http://localhost:8800/admin/delete/${post}`, posts)
  }
  const checkPost = (post)=>{
    Axios.put(`http://localhost:8800/admin/user/update/${post}`, posts)
  }
  console.log(posts)
    return (
      <>
        {posts.map((posts, id) => {
         
          return (
            <div  className="data-post" key={posts.id} style={{backgroundColor: alternatingColor[id % 2] }}>
                <a href=""><div class="usename-data">{posts.name}</div></a>
                <img class="avatar-data" src={posts.image}/>
                <a href=""><div class="title-data">{posts.postName}</div></a>
                <div className="createat-data" >{posts.dateTime}</div>
                <div /*onClick={() => setCurrentStatus('ok')} */className="status-data" style={{backgroundColor: posts.status === "pending" ? "#f1bc68" : "indianred"}} >{posts.status} </div>

                <div className="dropdown">
                     <div className="option-data" ><BsThreeDots/></div>
                     <div className="dropdown-content">
                       <ul className="dropdown-option">
                        <li><button onClick={() => checkPost(posts.idPost)} className="check-btn" href="#">Check</button></li>
                        <li><button className="edit-btn">edit</button></li>
                        <li><button onClick={() => deletePost(posts.idPost)} className="delete-btn" href="#">Delete</button></li>
                       </ul>
                     </div>
                </div>
            </div>
          );
        })}
      </>
    );
  }
  
  export default DataPost;

 export function DataUser ({user}) {
  
  const deleteUser = (u)=>{
   
    //Axios.delete(`http://localhost:8800/admin/delete/${u}`, user)
    // Axios.delete(`http://localhost:8800/admin/description/delete/${p}`, posts)
    // Axios.delete(`http://localhost:8800/admin/like/delete/${p}`, posts)
    //Axios.delete(`http://localhost:8800/admin/delete/${u}`,user)
    Axios.delete(`http://localhost:8800/admin/user/delete/${u}`, user)
  }
    return (
      <>
     
        {user.map((user, id) => {
          return (
           
            <div  className='user-data' key={user.id} style={{backgroundColor: alternatingColor[id % 2] }}>
               { console.log(user.userName)}
              <img className="avatar-user" src={user.avatar}/>
              <a href='#'><div className='usename'>{user.name}</div></a>
              <div className='gender'>{user.gender}</div>
              <div className='mail'>{user.gmail}</div>
              <div className='phone'>{user.phoneNumber}</div>
              <div className='account'>{user.accountType}</div>
              <div className="dropdown">
                     <div className="option-data" ><BsThreeDots/></div>
                     <div className="dropdown-content" >
                       <ul className="dropdown-option-user">
                        <div className='add-mod'>
                        <li><button className="edit-btn" >Edit</button></li>
                        </div>
                        <li><button onClick={()=>{deleteUser(user.userName)}} className="delete-btn" href="#">Delete</button></li>
                       </ul>
                     </div>
                </div>
                
            </div> 
          );
        })}
      </>
    );
  }


  
   
  