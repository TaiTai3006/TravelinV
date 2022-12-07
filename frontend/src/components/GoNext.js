import React, { useState,useEffect } from "react";
import danang from "../image/danang.jpg";
import Axios, * as others from 'axios';
function GoNext() {
  const [places, setPlace] = useState([
    // {
    //   id: 1,
    //   province: "Da Nang",
    //   img: { danang },
    // },
    // {
    //   id: 2,
    //   province: "Da Nang",
    //   img: { danang },
    // },
    // {
    //   id: 3,
    //   province: "Da Nang",
    //   img: { danang },
    // },
    // {
    //   id: 4,
    //   province: "Da Nang",
    //   img: { danang },
    // },
    // {
    //   id: 5,
    //   province: "Da Nang",
    //   img: { danang },
    // },
    // {
    //   id: 6,
    //   province: "Da Nang",
    //   img: { danang },
    // },
    // {
    //   id: 7,
    //   province: "Da Nang",
    //   img: { danang },
    // },
    // {
    //   id: 8,
    //   province: "Da Nang",
    //   img: { danang },
    // },
    // {
    //   id: 9,
    //   province: "Da Nang",
    //   img: { danang },
    // },
    // {
    //   id: 10,
    //   province: "Da Nang",
    //   img: { danang },
    // },
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
