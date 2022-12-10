import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import dataProvince from "../dataProvince";
import img from "../image/Dalat.png";

function Intro() {
  const [provinces, setProvinces] = useState(dataProvince);
  const [showOverlay, toggleOverlay] = useState(false);
  return (
    <>
      <div className="intro_container">
        <img
          className="intro_image"
          src={img}
          alt="image_main"
        />
        <div className="intro_text--cover">
          <em className="welcome_text">
            Hi, welcome to Travel inVietNam
            <br />
            We create inspiring <a>travel blogs</a>
            about the world’s most beautiful places to make planning your
            holiday a piece of cake!
          </em>
          <p className="destination_text">
            {" "}
            Choose a
            <span onClick={() => toggleOverlay(true)}>
              destination here <HiChevronDown />
            </span>
            {showOverlay && (
              <div className="overlayBG" onClick={() => toggleOverlay(false)}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    className="overlayContent"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {provinces.map((province) => {
                      return (
                        <>
                          <span className="province-name">{province.name}</span>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            to start your journey.
          </p>
        </div>
      </div>
    </>
  );
}

export default Intro;
