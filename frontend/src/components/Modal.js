import React, { useState, useEffect } from "react";

import Axios, * as others from "axios";
import { HiChevronDown } from "react-icons/hi";
import { IconContext } from "react-icons";
import { UserContext } from "../App";
const Modal = () => {
  // const [isShow, setIsShow] = useState(false);

  // const handleMouseOver = () => {
  //   setIsShow(true);
  // };

  // const handleMouseOut = () => {
  //   setIsShow(false);
  // };
  const [places, setPlace] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8800/home/gonext").then((response) => {
      setPlace(response.data);
    });
  }, []);
  return (
    <div className="modal-container">
      <div
        // onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
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
      <div className="modal-view">
          <div className="palace-modal">
            {places.map((place) => {
              const { idProvince, provinceName, image } = place;
              return (
                <div className="paplace-item">
                  <a href="#">
                    <p>{provinceName}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      {/* {isShow && (
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
      )} */}
    </div>
  );
};

export default Modal;
