import React, { useState,useEffect } from "react";
import danang from "../image/danang.jpg";
import Axios, * as others from 'axios';
function GoNext() {
  const [places, setPlace] = useState([
    
  ]);
  useEffect(() =>{
    Axios.get("http://localhost:8800/home/gonext").then((response)=>{
       setPlace(response.data)
      }
    )
  },[])
  return (
    <>
      <div className="next-container">
        <div className="next-title">
          <p>Where to</p>
          <h2>Next?</h2>
        </div>
        
        <div className="next_place">
          {places.map((place) => {
            const { idProvince, provinceName, image } = place;
            return (
              <div className="next_place-item">
                <a href="#">
                  <img
                    src={image}
                    alt={place.provinceName}
                  />
                  <p>{provinceName}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GoNext;
