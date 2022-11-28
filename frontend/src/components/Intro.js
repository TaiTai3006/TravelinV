import React from "react";
import Intro_img from "../image/intro_img.jpg";
import { HiChevronDown } from "react-icons/hi";

function Intro() {
  return (
    <>
      <div className="intro_container">
        <img className="intro_image" src={Intro_img} width="868" height="550" />
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
            <span>
              destination here <HiChevronDown />
            </span>
            to start your journey.
          </p>
        </div>
      </div>
    </>
  );
}

export default Intro;
