import "../admin.css";
import Axios, * as others from "axios";
import { BiX } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import axios from "axios";

const alternatingColor = [" #FFFFFF ", " #F4F2EE"];

function DataPost({ posts }) {
  const { user } = useContext(UserContext);
  const deletePost = (post) => {
    Axios.delete(
      `http://localhost:8800/admin/description/delete/${post}`,
      posts
    );
    Axios.delete(`http://localhost:8800/admin/like/delete/${post}`, posts);
    Axios.delete(`http://localhost:8800/admin/delete/post/${post}`, posts);

    window.location.reload(false);
  };
  const checkPost = (post) => {
    Axios.put(`http://localhost:8800/admin/user/update/${post}`, posts);
    window.location.reload(false);
  };
  return (
    <>
      {posts.map((posts, id) => {
        console.log(posts);
        return (
          <div
            className="data-post"
            key={posts.id}
            style={{ backgroundColor: alternatingColor[id % 2] }}
          >
            <div className="user-name user-item">
              <img class="avatar-data" src={posts.image} />
              <Link to={`/Personal/${posts.userName}`}>
                <div class="usename-data">{posts.userName}</div>
              </Link>
            </div>

            <Link to={`/Blogs/${posts.idProvince}/${posts.idPost}`}>
              <div class="title-data user-item">{posts.postName}</div>
            </Link>
            <div className="createat-data user-item">{posts.dateTime}</div>
            <button
              onClick={() => checkPost(posts.idPost)}
              className="status-data user-item"
              style={{
                backgroundColor:
                  posts.status === "pending" ? "#f1bc68" : "indianred",
              }}
            >
              {posts.status}{" "}
            </button>
            {user.accountType === "admin" && (
              <button
                onClick={() => {
                  deletePost(posts.idPost);
                }}
                className="deleteBtn"
                >
                  <BiX style={{ fontSize: 15 }} />
              </button>
            )}

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

export function DataUser({ user }) {
  const deleteUser = (u) => {
    // Axios.delete(http://localhost:8800/admin/description/delete/${p}, posts)
    // Axios.delete(http://localhost:8800/admin/like/delete/${p}, posts)
    Axios.delete(`http://localhost:8800/admin/delete/${u}`,user )
    Axios.delete(`http://localhost:8800/admin/user/delete/${u}`, user);

    window.location.reload(false);
  };
  const handleUpdateAccount = (accountType, userName) => {
    if (accountType === "user") {
      Axios.put(`http://localhost:8800/accountType/${userName}`, {
        accountType: "collaborator",
      }).then((res)=> console.log(res))
      window.location.reload(false);
    } else if (accountType === "collaborator") {
      Axios.put(`http://localhost:8800/accountType/${userName}`, {
        accountType: "user",
      }).then((res)=> console.log(res))
      window.location.reload(false);
    }
  };
  return (
    <>
      {user.map((user, id) => {
        return (
          <div
            className="user-data"
            key={user.id}
            style={{ backgroundColor: alternatingColor[id % 2] }}
          >
            <div className="user-item">
              <img className="avatar-user" src={user.avatar} />
              <Link to={`/Personal/${user.userName}`}  className="usename">
                {user.userName}
              </Link>
            </div>

            <div className="gender user-item">{user.gender}</div>
            <div className="mail user-item">{user.gmail}</div>
            <div className="phone user-item">{user.phoneNumber}</div>
            <div className="account user-item">
              <button
                onClick={() => {
                  handleUpdateAccount(user.accountType, user.userName);
                }}
              >
                {" "}
                {user.accountType}
              </button>
            </div>
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

            <button
              onClick={() => {
                deleteUser(user.userName);
              }}
              className="deleteBtn"
            >
              <BiX style={{ fontSize: 15 }} />
            </button>
          </div>
        );
      })}
    </>
  );
}
