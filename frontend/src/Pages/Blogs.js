import React from "react";
import "../App.css";
import "../Blogs.css";
import SliderBlogs from "../components/SliderBlogs";
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import axios from "axios"

import Goto from "../components/Goto"


const USERNAME = 'taitai'

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
    <div class="image-ctn" >
      <span className="post-name" >Best Travel Insurances in {FeaturedPost[0].Year}</span>
        <img className="featured-img" src={FeaturedPost[0].image} alt="image not found"></img>

      </div>
      <div class="image-ctn2" >
      <span className="post-name" >Best Travel Insurances in {FeaturedPost[1].Year}</span>
        <img className="featured-img" src={FeaturedPost[1].image} alt="image not found"></img>
      </div>
    </div>
    </div>
    <div class="recent">
    <h2>Recent Posts</h2>
      <div className="recent-post-ctn" >
        <div className="img-recent-ctn1">
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
=======
import Goto from "../components/Goto";
const content = [
  {
    title: "How to plan the trip: 7 Easy tips for your next adventure",
    image:
      "https://e4life.vn/wp-content/uploads/2021/09/tu-vung-ielts-chu-de-travel.png",
  },
  {
    title: "How to plan the trip: 7 Easy tips for your next adventure",
    image:
      "https://e4life.vn/wp-content/uploads/2021/09/tu-vung-ielts-chu-de-travel.png",
  },
];
export default function Blogs() {
  return (
    <div>
      <div class=" h1-container">
        <h1>Travel Tips</h1>
      </div>
      <nav class="goto-container">
        <span>Go to:</span>
        <Goto />
      </nav>
      <div className="body-ctn">
        <div class=" featured-container">
          <h2>Featured Posts</h2>
          <div className="featured-post-ctn">
            <div class="image-ctn">
              <span className="post-name">Best Travel Insurances in 2022</span>
              <img
                className="featured-img"
                src="https://e4life.vn/wp-content/uploads/2021/09/tu-vung-ielts-chu-de-travel.png"
                alt="image not found"
              ></img>
            </div>
            <div class="image-ctn">
              <span className="post-name">Best Travel Insurances in 2022</span>
              <img
                className="featured-img"
                src="http://vacationtravel.com.vn/images/photo/travel7.jpg"
                alt="image not found"
              ></img>
            </div>
          </div>
        </div>
        <div class="recent">
          <h2>Recent Posts</h2>
          <div className="recent-post-ctn">
            <div className="img-recent-ctn">
              <span className="post-name-recent">con bo kiu meo meo </span>
              <img
                className="recent-img"
                src="http://vacationtravel.com.vn/images/photo/travel7.jpg"
                class="recent-img"
                alt=""
              ></img>
            </div>
            <div className="img-recent-ctn">
              <span className="post-name-recent">con cho kiu moo moo </span>
              <img
                class="recent-img"
                src="https://imageio.forbes.com/specials-images/imageserve/62f2863deb9b0c0cd1fe6374/fall-travel-cheaper/0x0.jpg?format=jpg&width=960"
                alt=""
              ></img>
            </div>
            <div className="img-recent-ctn">
              <span className="post-name-recent">
                con heo kiu cuc tac cuc tac{" "}
              </span>
              <img
                class="recent-img"
                src="https://www.sbb.ch/content/dam/internet/sharedimages/objekte/Swiss-Bankers-Travel.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"
                alt=""
              ></img>
            </div>
          </div>
>>>>>>> 63f416f8b54ca4ed9ed385bfa63f51fc87bd0122
        </div>
      </div>
      <div class="slider-ctn">
        <div class="slider-div">
          <SliderBlogs />
        </div>
      </div>
    </div>
  );
}
