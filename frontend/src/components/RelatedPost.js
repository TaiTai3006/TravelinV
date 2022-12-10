import React, { useEffect, useState } from "react";
import related1 from "../image/danang.jpg";

import related2 from "../image/rl2.jpg";
import dalat from "../image/dalat.jpg";
import Axios, * as others from 'axios';
function RelatedPost() {
  const [posts1, setPost1] = useState([
    // {
    //   id: 1,
    //   img: { related2 },
    //   title: " 27 Mistakes You Wish Not To Make When Traveling Solo",
    // },
    // {
    //   id: 2,
    //   img: "../../src/image/dalat.jpg",
    //   title: " 27 Mistakes You Wish Not To Make When Traveling Solo",
    // },
    // {
    //   id: 3,
    //   img: "../../src/image/dalat.jpg",
    //   title: " 27 Mistakes You Wish Not To Make When Traveling Solo",
    // },
    // {
    //   id: 4,
    //   img: "../../src/image/dalat.jpg",
    //   title: " 27 Mistakes You Wish Not To Make When Traveling Solo",
    // },
    // {
    //   id: 5,
    //   img: "../../src/image/dalat.jpg",
    //   title: " 27 Mistakes You Wish Not To Make When Traveling Solo",
    // },
    // {
    //   id: 6,
    //   img: "../../src/image/dalat.jpg",
    //   title: " 27 Mistakes You Wish Not To Make When Traveling Solo",
    // },
    // {
    //   id: 7,
    //   img: "../../src/image/dalat.jpg",
    //   title: " 27 Mistakes You Wish Not To Make When Traveling Solo",
    // },
    // {
    //   id: 8,
    //   img: "../../src/image/dalat.jpg",
    //   title: " 27 Mistakes You Wish Not To Make When Traveling Solo",
    // },
    // {
    //   id: 9,
    //   img: "../../src/image/dalat.jpg",
    //   title: " 27 Mistakes You Wish Not To Make When Traveling Solo",
    // },
  ]);

  const [posts2, setPost2] = useState([
    // {
    //   id: 1,
    //   img: { dalat },
    //   provinc: " Da Nang",
    // },
    // {
    //   id: 2,
    //   img: { dalat },
    //   provinc: " Da Nang",
    // },
    // {
    //   id: 3,
    //   img: { related1 },
    //   provinc: " Da Nang",
    // },
    // {
    //   id: 4,
    //   img: { dalat },
    //   provinc: " Da Nang",
    // },
    // {
    //   id: 5,
    //   img: { related1 },
    //   provinc: " Da Nang",
    // },
    // {
    //   id: 6,
    //   img: { related1 },
    //   provinc: " Da Nang",
    // },
    // {
    //   id: 7,
    //   img: { related1 },
    //   provinc: " Da Nang",
    // },
    // {
    //   id: 8,
    //   img: { related1 },
    //   provinc: " Da Nang",
    // },
    // {
    //   id: 9,
    //   img: { related1 },
    //   provinc: " Da Nang",
    // },
  ]);
  useEffect(()=>{
    Axios.get('http://localhost:8800/home/relatedpost').then((response) => {
      // console.log(response.data)
      setPost1(response.data)
      // setPost2(response.data)
    })
  })
  return (
    <div className="related-post--container">
      <div className="related-post--content">
        {posts1.map((post) => {
          const { id, postName, image } = post;
          return (
            <a href="#" className="related-post--item" key={id}>
              {/* <img src={img} alt={post.title} /> */}
              <div className="realted-post--item-image">
                {/* <img src={window.location.origin + related2} /> */}
                <img src={image} ></img>
              </div>
              <div className="realted-post--item-title">
                <p> {postName}</p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="related-post--suggestion">
        {posts1.map((post) => {
          const { id, provinceName, image } = post;
          return (
            <>
              <a
                href="#"
                className="suggestion--item front "
                key={id}
                // style={{ backgroundImage:`url(${process.env.PUBLIC_URL+ img})` }}
              >
                <img src={image} />
                {/* <img src={dalat}  width="250" height="400"/> */}
                <div className="province">{provinceName}</div>
              </a>
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
