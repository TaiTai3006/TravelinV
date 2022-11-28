
import React from 'react';
import "../App.css"
import "../Blogs.css"
import SliderBlogs from "../components/SliderBlogs";
import Goto from "../components/Goto"
const content = [{
  title: "How to plan the trip: 7 Easy tips for your next adventure",
  image: "https://e4life.vn/wp-content/uploads/2021/09/tu-vung-ielts-chu-de-travel.png"
},
{
  title: "How to plan the trip: 7 Easy tips for your next adventure",
  image: "https://e4life.vn/wp-content/uploads/2021/09/tu-vung-ielts-chu-de-travel.png"
}
]
export default function Blogs() {

  return ( 
  <div>
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
      <span className="post-name" >Best Travel Insurances in 2022</span>
        <img className="featured-img" src="https://e4life.vn/wp-content/uploads/2021/09/tu-vung-ielts-chu-de-travel.png"alt="image not found"></img>

      </div>
      <div class="image-ctn2" >
      <span className="post-name" >Best Travel Insurances in 2022</span>
        <img className="featured-img" src="http://vacationtravel.com.vn/images/photo/travel7.jpg" alt="image not found"></img>
      </div>
    </div>
    </div>
    <div class="recent">
    <h2>Recent Posts</h2>
      <div className="recent-post-ctn" >
        <div className="img-recent-ctn1">
          <span className="post-name-recent">con bo kiu meo meo </span>
          <img className="recent-img" src="http://vacationtravel.com.vn/images/photo/travel7.jpg" class="recent-img" alt=""></img>
        </div>
        <div className="img-recent-ctn2">
           <span className="post-name-recent">con cho kiu moo moo </span>
          <img  class="recent-img" src="https://imageio.forbes.com/specials-images/imageserve/62f2863deb9b0c0cd1fe6374/fall-travel-cheaper/0x0.jpg?format=jpg&width=960" alt=""></img>
        </div>
        <div className="img-recent-ctn3">
          <span className="post-name-recent">con heo kiu cuc tac cuc tac </span>
        <img class="recent-img" src="https://www.sbb.ch/content/dam/internet/sharedimages/objekte/Swiss-Bankers-Travel.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" alt=""></img>
        </div>
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