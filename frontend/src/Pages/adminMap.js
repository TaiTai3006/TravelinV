import React, { useState } from "react";
import './App.css';
import {BsPersonCircle} from 'react-icons/bs'
import {BsThreeDots} from 'react-icons/bs'
import { red } from "@mui/material/colors";
import {IoMdAddCircle} from 'react-icons/io'




const alternatingColor = [ ' #FFFFFF ', " #F4F2EE"]
function DataPost({posts}) {
    return (
      <>
        {posts.map((posts, id) => {
          return (
            <div  className="data-post" key={posts.id} style={{backgroundColor: alternatingColor[id % 2] }}>
                <a href=""><div class="usename-data">{posts.usename}</div></a>
                <img class="avatar-data" src={posts.avatar}/>
                <a href=""><div class="title-data">{posts.title}</div></a>
                <div className="createat-data" >{posts.createat}</div>
                <div className="status-data" style={{backgroundColor: posts.status === "Pending" ? "#f1bc68" : "indianred"}}  >{posts.status}</div>

                <div className="dropdown">
                     <div className="option-data" ><BsThreeDots/></div>
                     <div className="dropdown-content" >
                       <ul className="dropdown-option">
                        <li><a className="text-check" href="#">Check</a></li>
                        <li><a className="text-delete" href="#">Delete</a></li>
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
    return (
      <>
        {user.map((user, id) => {
          return (
            <div  className='user-data' key={user.id} style={{backgroundColor: alternatingColor[id % 2] }}>
              <img className="avatar-user" src={user.avatar}/>
              <a href='#'><div className='usename'>{user.usename}</div></a>
              <div className='gender'>{user.gender}</div>
              <div className='mail'>{user.mail}</div>
              <div className='phone'>{user.phone}</div>
              <div className='account'>{user.account}</div>
              <div className="dropdown">
                     <div className="option-data" ><BsThreeDots/></div>
                     <div className="dropdown-content" >
                       <ul className="dropdown-option-user">
                        <div className='add-mod'>
                        <div className="addmod-icon"><IoMdAddCircle/></div>
                        <li><a href='#' className="text-add-mod">Mod</a></li>
                        </div>
                        <li><a className="text-delete-user" href="#">Delete</a></li>
                       </ul>
                     </div>
                </div>
                
            </div> 
          );
        })}
      </>
    );
  }


  
   
  