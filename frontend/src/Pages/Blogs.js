import React from 'react';
import "../App.css"
import "../Blogs.css"
import SliderBlogs from "../components/SliderBlogs";
import { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import Goto from "../components/Goto"


export default function Blogs() {
  const [FeaturedPost, setFeaturePost] = useState([{Year:'2022', image:''}, {Year:'2022', image:''}])
  const [RecentPost, setRecentPost] = useState([{postName:'2022', image:''}, {postName:'2022', image:''}, {postName:'2022', image:''}])

  useEffect(()=>{
    const FecthFeaturePost = async ()=>{
        try{
            await axios.get(`http://localhost:8800/Blogs/FeaturedPost`).then((response) =>{
                setFeaturePost(response.data)
                // console.log(response.data)
            })
        } catch (err) {
            console.log(err)
        }
    };
    const FecthRecentPost = async ()=>{
        try{
            await axios.get(`http://localhost:8800/Blogs/RecentPost`).then((response) =>{
                setRecentPost(response.data)
                // console.log(response.data)
            })
        } catch (err) {
            console.log(err)
        }
    };
    FecthFeaturePost()
    FecthRecentPost()
},[])
const [test,settest] = useState([
  {
    name: "post 1",
    img:"https://www.rmit.edu.vn/content/dam/rmit/vn/en/assets-for-production/images/vietnam/hanoi-lake.jpg/stock-vietnam-danang-hands-bridge.jpg"
  },
  {
    name: "post 2",
    img: "https://thumbs.dreamstime.com/z/golden-bridge-hand-god-da-nang-vietnam-january-golden-bridge-hand-god-da-nang-vietnam-january-173306998.jpg"
  },
  {
    name: "post 3",
    img:"https://thumbs.dreamstime.com/z/golden-bridge-hand-god-da-nang-vietnam-january-golden-bridge-hand-god-da-nang-vietnam-january-173306998.jpg"
  }
])
  return ( 
  <div>
    {/* {console.log(FeaturedPost)} */}
    <div class=" h1-container">
      <h1>Travel Tips</h1>
    </div>
    <nav class="goto-container">
    <ul>
    <span>
      Go to: 
    </span>
    <Goto/>
    </ul>
  </nav>
  <div className="body-ctn">
  <div class=" featured-container">  
    <h2>Featured Posts</h2>
    <div className="featured-post-ctn">

      {test.map((tests, index)=>{
        return(
          <div class="image-ctn" >
          <a href = "">
            <span className="post-name" >{tests.name}</span>
            <img className = "featured-img" src={tests.img} ></img>
          </a>
          </div>
        )
      })}
      {/* <div class="image-ctn2" >
      <a href="">
      <span className="post-name" > {FeaturedPost[1].postName}</span>
        <img className="featured-img" src={FeaturedPost[1].image} alt="image not found"></img>
      </a>
      </div> */}
    </div>
    </div>
    <div class="recent">
    <h2>Recent Posts</h2>
      <div className="recent-post-ctn" >
        {test.map((tests,index)=>{
          return(
            <div className="img-recent-ctn1" >
            <a href="" >
              <span className="post-name-recent" >{tests.name}</span>
              <img className="recent-img" src={tests.img} ></img>
            </a>
          </div>
          )
        })}
        {/* <div className="img-recent-ctn1">
          <span className="post-name-recent">{RecentPost[0].postName}</span>
          <img className="recent-img" src={RecentPost[0].image} class="recent-img" alt=""></img>
        </div>
        <div className="img-recent-ctn2">
           <span className="post-name-recent">{RecentPost[1].postName}</span>
          <img  class="recent-img" src={RecentPost[1].image} alt=""></img>
        </div>
        <div className="img-recent-ctn3">
          <span className="post-name-recent">{RecentPost[2].postName}</span>
        <img class="recent-img" src={RecentPost[2].image} alt=""></img>
        </div> */}
      </div>
  </div>

</div>
<div class="slider-ctn">
        <div class="slider-div">
          <SliderBlogs/>
        </div>
</div>

</div> 
  )
}
