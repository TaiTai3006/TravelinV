import { useState, useEffect } from "react";
import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import axios from "axios"

export default function Slider() {
const [currentSlide, setCurrentSlide] = useState(0)
const [slideImages, setSlideImages] = useState([{}])
const [relatedPosts, setRelatePosts] = useState([{}])

    const slideLengh = slideImages.length;
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLengh - 1 ? 0 : currentSlide + 1);
    }
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLengh - 1: currentSlide - 1);
    }
    
    useEffect(()=>{
      const FecthSlideImages= async ()=>{
          try{
              await axios.get(`http://localhost:8800/SliderBlogs/SlideImages`).then((response) =>{
                  setSlideImages(response.data)
                  console.log(response.data)
              })
          } catch (err) {
              console.log(err)
          }
      };
      const FecthRelatedPosts = async ()=>{
          try{
              await axios.get(`http://localhost:8800/SliderBlogs/RelatedPosts/${slideImages[currentSlide].idProvince}/${slideImages[currentSlide].idPost}`).then((response) =>{
                  setRelatePosts(response.data)
                  console.log(response.data)
              })
          } catch (err) {
              console.log(err)
          }
      };
      FecthSlideImages();
      FecthRelatedPosts();
  },[currentSlide])

  return(
    <div className="">
      {/* {console.log(slideImages)} */}
        <div className="realated-post-ctn">
        <div className="sidebar-articles">
        <div className="sidebar-articles_container_blogs" 
          style={relatedPosts.length === 0 ? 
          {} : 
          {
            backgroundColor: '#f5f5f5',
            padding: '20px',
          }}>
          {relatedPosts.map((relatedPost, index) => (
            <Link className="article-text-block" to="/Blogs/Dalat">
              <div className="article-text-block_image" key={index}>
                <img src={relatedPost.image} alt="image of post"></img>
              </div>
              <div className="article-text-block_content">
                <h2>{relatedPost.postName}</h2>
              </div>
            </Link>
          ))}
        </div>
        </div>
        </div>
        <button className=" slider-btn" id="left" onClick={prevSlide} ><HiChevronLeft/></button>
        <button className=" slider-btn" id="right" onClick={nextSlide} ><HiChevronRight/></button>
        <span className="slider-title">{slideImages[currentSlide].postName}</span>
        <span className="slider-des">{slideImages[currentSlide].demoDescription}</span>
        <div className='button-ctn'>
          <a className="slider-button" href={slideImages.postName}>GO TO POST</a>
        </div>
        {slideImages.map((slideImage, index) =>(
              <div key={index} className="slide.active">
                {index === currentSlide && (
                    <img className="slider-img" src={slideImage.image} ></img>)}
                </div>
          )
          )}
        </div>
  );
}
