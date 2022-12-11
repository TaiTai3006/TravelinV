import React, { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation()
  useEffect(() =>{
    Axios.get("http://localhost:8800/home/gonext").then((response)=>{
       setPlace(response.data)
      }
    )
  },[location])
  return (
    <>
      <div className="next-container">
        <div className="next-title">
          <p>Where to</p>
          <h2>Next?</h2>
        </div>
        
        <div className="next_place">
          {places.map((place) => {
            return (
              <div key={place.idProvince} className="next_place-item">
                <Link to = {`/Blogs/${place.idProvince}`}>
                  <img
                    src={place.image}
                    alt={place.provinceName}
                  />
                  <p>{place.provinceName}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GoNext;
