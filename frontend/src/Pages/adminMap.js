import "../admin.css";
//import { red } from "@mui/material/colors";
import Axios, * as others from "axios";
import axios from "axios";
import { BiX } from "react-icons/bi";

const alternatingColor = [" #FFFFFF ", " #F4F2EE"];
function DataPost({ posts }) {
  const deletePost = (post) => {
    Axios.delete(
      `http://localhost:8800/admin/description/delete/${post}`,
      posts
    );
    Axios.delete(`http://localhost:8800/admin/like/delete/${post}`, posts);
    Axios.delete(`http://localhost:8800/admin/delete/${post}`, posts);

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
              <img className="avatar-data" src={posts.image} />
              <a href="" className="usename-data">
                {posts.userName}
              </a>
            </div>

            <a href="" className="title-data user-item">
              {posts.postName}
            </a>
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
            <button
              onClick={() => {
                deletePost(posts.idPost);
              }}
              className="deleteBtn"
            >
              <BiX style={{ fontSize: 15 }} />
            </button>

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
    // Axios.delete(http://localhost:8800/admin/delete/${p},posts)
    Axios.delete(`http://localhost:8800/admin/user/delete/${u}`, user);

    window.location.reload(false);
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
              <a href="#" className="usename">
                {user.userName}
              </a>
            </div>

            <div className="gender user-item">{user.gender}</div>
            <div className="mail user-item">{user.gmail}</div>
            <div className="phone user-item">{user.phoneNumber}</div>
            <div className="account user-item">{user.accountType}</div>
            

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
