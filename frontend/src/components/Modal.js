import React, { useState,useEffect } from "react";

import Axios, * as others from 'axios';
import { HiChevronDown } from "react-icons/hi";
import { IconContext } from "react-icons";
import { UserContext } from "../App";
const Modal = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const [places, setPlace] = useState([
    
  ]);
  useEffect(() =>{
    Axios.get("http://localhost:8800/home/gonext").then((response)=>{
       setPlace(response.data)
      }
    )
  },[])
  return (
    <div className="modal-container">
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="modal"
      >
        <li className="search">
          <a href="">
            Want to go ...
            <IconContext.Provider value={{ className: "icon_chevDown" }}>
              <HiChevronDown />
            </IconContext.Provider>
          </a>
        </li>
      </div>

      {isHovering && (
        <div className="modal-view">
          <div className="palace">
          {places.map((place) => {
            const { idProvince, provinceName, image } = place;
            return (
              <div className="next_place-item">
                <a href="#">
                  
                  <p>{provinceName}</p>
                </a>
              </div>
            );
          })}
        </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
