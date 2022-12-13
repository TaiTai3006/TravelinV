import React, { useEffect, useState } from "react";
import Axios, * as others from 'axios';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function RelatedPost() {
  const { pathname } = useLocation();
  const [posts1, setPost1] = useState([
    
  ]);

  const [posts2, setPost2] = useState([
    
  ]);
  useEffect(()=>{
    Axios.get('http://localhost:8800/home/relatedpost1').then((response) => {
      // console.log(response.data)
      setPost1(response.data)
      // setPost2(response.data)
    })
    Axios.get('http://localhost:8800/home/relatedpost2').then((response) => {
      // console.log(response.data)
      setPost2(response.data)
      // setPost2(response.data)
    })
  },[pathname])
  return (
    <div className="related-post--container">
      <div className="related-post--content">
        {posts1.map((post) => {
          const { id, postName, image } = post;
          return (
            <Link to = {`/Blogs/${post.idProvince}/${post.idPost}`} className="related-post--item" key={id}>
              {/* <img src={img} alt={post.title} /> */}
              
              <div className="realted-post--item-image">
                {/* <img src={window.location.origin + related2} /> */}
              <img src={image} ></img>
              </div>
              <div className="realted-post--item-title">
                <p> {postName}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="related-post--suggestion">
        {posts2.map((post) => {
          const { id, provinceName, image } = post;
          return (
            <>
              <Link
                to= {`/Blogs/${post.idProvince}/${post.idPost}`}
                className="suggestion--item front "
                key={id}
                // style={{ backgroundImage:`url(${process.env.PUBLIC_URL+ img})` }}
              >
                <img src={image} />
                {/* <img src={dalat}  width="250" height="400"/> */}
                <div className="province">{provinceName}</div>
              </Link>
              {/* <a href="#" className="suggestion--item back" key={id}>
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </a> */}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedPost;
