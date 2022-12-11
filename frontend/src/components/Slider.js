import React, { useState, useEffect } from "react";
import Axios, * as others from 'axios';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Slider() {
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const [slide, setSlide] = useState([{userName: '', postName: '',  demoDescription: '', image: '',}]
  //   try{
  //     const res = await Axios.get('http://localhost:8800/home/slider')
  //     return res.data
  //   }
  //   catch (err){
  //     console.log(err)
  //   }
  )
  useEffect(()=>{
    Axios.get('http://localhost:8800/home/slider').then((response) => {
      setSlide(response.data)
    }) 
  },[pathname])
  // console.log(slide)
  const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
      setTimeout(() => {
        setCurrentSlide(() => {
          // console.log(currentSlide);
          if (currentSlide + 1 > slide.length - 1) {
            return 0;
          } else {
            return currentSlide + 1;
          }
        });
      }, 2000);
    },[currentSlide, slide]);
  return (
    <div className="slideshow-container">
      <div
        className="slideshow-slide"
        style={{ backgroundImage: `url(${slide[currentSlide].image})`,
        transform: `translate3d(${-slide[currentSlide].index * 100}%, 0, 0)` 
      }}
      >
        <div className="slideshow-slide-text">
                <p>{slide[currentSlide].userName}</p>
                <h3>{slide[currentSlide].postName}</h3>
                <span>{slide[currentSlide].demoDescription}</span>
                <button onClick={()=> navigate('/Blogs')}>Travel Tips</button>
              </div>

      </div>
    </div>

  )
  }

export default Slider
