import React, { useEffect, useState } from "react";
import dalat from "../image/dalat.jpg";
import { useLocation } from "react-router-dom";
import Axios, * as others from 'axios';
import { Link } from "react-router-dom";

function FeaturePost() {
  const { pathname } = useLocation();
  const [posts, setpost] = useState([])

 useEffect(() =>{
   Axios.get("http://localhost:8800/home/featuredpost").then((response)=>{
    console.log(response.data)
      setpost(response.data)
     }
   )
 },[pathname])
  return (
    <div className="feature_post--container">
      {posts.map((posts) => {
        const { idPost, postName, image } = posts;
        return (
          <Link to = {`/Blogs/${posts.idProvince}/${posts.idPost}`} className="feature_post" >
            <h2 className="feature_post--title">{postName} </h2>
            <abbr title={postName}>
            <div className="feature_post--img">
              <img src={image} alt={postName} />
            </div>
            </abbr>     
          </Link>
        );
      })}
    </div>
  );
}

export default FeaturePost;
