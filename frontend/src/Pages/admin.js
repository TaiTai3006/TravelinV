import "../admin.css";
import { MdOutlineArticle } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import DataPost from "./adminMap";
import { React, useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

import { GrUserAdmin } from "react-icons/gr";
import { BsPersonCircle } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { HiChevronRight } from "react-icons/hi";
import { DataUser } from "./adminMap";
import { IoSearchCircle } from "react-icons/io5";
import Axios, * as others from "axios";
import { Link } from "react-router-dom";

function Admin() {
  const [search, setSearch] = useState([]);
  const [searchUser, setSearchUser] = useState([]);
  const [posts, setpost] = useState([]);
  const [user, setuser] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8800/admin/post").then((response) => {
      setpost(response.data);
      setSearch(response.data);
    });
    Axios.get("http://localhost:8800/admin/user").then((response) => {
      setuser(response.data);
      setSearchUser(response.data);
    });
  }, []);
  console.log(search);
  const [type, settype] = useState("blog");

  function handleEvent(type,posts) {
    if (type === "blog")
      return (
        <div className="info data-item ">
        {posts.map((posts, id) => {
         console.log(posts)
          return (
            <div  className="data-post" key={posts.id} style={{backgroundColor: alternatingColor[id % 2] }}>
                <a href=""><div class="usename-data">{posts.userName}</div></a>
                <a href=""><div class="title-data">{posts.postName}</div></a>
                <div className="createat-data" >{posts.dateTime}</div>
                <a href=""><div className="province-data">{posts.provinceName}</div></a>
                <button onClick={() => checkPost(posts.idPost)} className="status-data" style={{backgroundColor: posts.status === "pending" ? "#f1bc68" : "indianred"}} >{posts.status} </button>
                <div className="delete-btn-div">
                <button onClick={() => deletePost(posts.idPost)} className="delete-btn" href="#">Delete</button>
                </div>
                
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

        </div>
      );
    if (type === "user")
      return (
        <div className="info-user">
          {/* <DataUser user = {searchUser}/> */}
          {user.map((user, id) => {
          return (
           
            <div  className='user-data' key={user.id} style={{backgroundColor: alternatingColor[id % 2] }}>
              
              <img className="avatar-user" src={user.avatar}/>
              <a href='#'><div className='usename'>{user.userName}</div></a>
              <div className='gender'>{user.gender}</div>
              <div className='mail'>{user.gmail}</div>
              <div className='phone'>{user.phoneNumber}</div>
              <div className='account'>{user.accountType}</div>
              <div className="dropdown">
              <button onClick={()=>{deleteUser(user.userName)}} className="delete-btn" href="#">Delete</button>
                </div>
                
            </div> 
          );
        })}
        </div>
      );
  }
  function handleBar(type) {
    if (type === "blog")
      return (
        <div className="info-bar">
          <div className="username">Username</div>
          <div className="title">Title</div>
          <div className="create-at">Create at</div>
          <div className="status">Status</div>
        </div>
      );
    if (type === "user")
      return (
        <div className="info-bar">
          <div className="username">Username</div>
          <div className="title">Gender</div>
          <div className="username">Mail</div>
          <div className="create-at">Phone</div>
          <div className="status">Account</div>
        </div>
      );
  }
  const [iconArrow, seticonArrow] = useState("inline");
  const [blogColor, setblogColor] = useState("#F4F2EE");
  const [iconArrow2, seticonArrow2] = useState("none");
  const [userColor, setuserColor] = useState("none");
  const handleArrow = () => {
    setblogColor("#F4F2EE");
    seticonArrow("inline");
    seticonArrow2("none");
    setuserColor("");
  };
  const handleArrow2 = () => {
    seticonArrow2("inline");
    setuserColor("#F4F2EE");
    setblogColor("");
    seticonArrow("none");
  };

  return (
    <div className="admin-page">
      <div className="dashBoard">
        <div className="text1">Pages</div>
        <div
          onClick={handleArrow}
          style={{ backgroundColor: blogColor }}
          className="flex-blog"
        >
          <div className="icon-blog">
            <MdOutlineArticle />
          </div>
          <div className="text2" onClick={() => settype("blog")}>
            Blog
          </div>
          
        </div>
        <div
          onClick={handleArrow2}
          style={{ backgroundColor: userColor }}
          className="flex-user"
        >
          <div className="icon-user">
            <GrGroup />
          </div>
          
          <div className="text3" onClick={() => settype("user")}>
            Users
          </div>
        </div>
      </div>

      <div className="main-bar">
        <div className="head">
          <div className="nav-container">
            {/* Thanh địa chỉ */}
            <Link to="/">Home</Link>
            <HiChevronRight />
            <a href="#">Dashboard</a>
            <HiChevronRight />
          </div>
          <div className="search-container"> 
          <div className="text-tour">Post</div>
          <div className="search-bar">
            <input
              type="text"
              onChange={(text) => {
                setSearch(
                  posts.filter((post) => {
                    return (
                      post.postName
                        .toLowerCase()
                        .includes(text.target.value.toLowerCase()) ||
                      post.postName
                        .toLowerCase()
                        .includes(text.target.value.toLowerCase())
                    );
                  })
                );
                setSearchUser(
                  user.filter((users) => {
                    return users.userName
                      .toLowerCase()
                      .includes(text.target.value.toLowerCase());
                  })
                );
              }}
              placeholder="Search.."
            />
            
              <BiSearchAlt2 className="find-icon" />
            
          </div>
          </div>
          
        </div>
        {handleBar(type)}
        {handleEvent(type)}
      </div>

      {handleBar(type,posts)}
      {handleEvent(type,posts)}
    </div>
  );
}

export default Admin;
