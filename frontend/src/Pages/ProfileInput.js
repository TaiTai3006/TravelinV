import React, { useState } from "react";
import { BsFileImage } from "react-icons/bs";
import "../ProfileInput.css";

function ProfileInput() {
  const [selectedImageProfile, setSelectedImageProfile] = useState(null);

  return (
    <div className="profile-container">
        <h1 className="profile-title">Profile</h1>
      <form className="profile-form">
        <div className="profile-image">
          <label for="input-profileimg" className="profile-img">
            <BsFileImage className="preview--icon" />

            {selectedImageProfile && (
              <div>
                <img
                  alt="not fount"
                  width={"100%"}
                  src={URL.createObjectURL(selectedImageProfile)}
                />
              </div>
            )}
            <span>Upload your profile image</span>
          </label>

          <input
            type="file"
            hidden
            id="input-profileimg"
            onChange={(event) => {
              setSelectedImageProfile(event.target.files[0]);
            }}
          />
        </div>
        
        

      
        <div className="profile-input">
          
          <span> Usename </span>
          <input type="text" placeholder="Enter your usename "required></input>
          <span> Email </span>
          <input type="text" placeholder="Enter your email "required></input>
          <span> Phone </span>
          <input type="text" placeholder="Enter your phone "required></input>
          <span> Gender </span>
          <div className="choice-gender-container">
            <div className="choice-gender">
              <input
                type="radio"
                id="genderChoice1"
                name="gender"
                value="male"
                required
              />
              <label for="genderChoice1">Male</label>
            </div>
            <div className="choice-gender">
              <input
                type="radio"
                id="genderChoice2"
                name="gender"
                value="female"
                required
              />
              <label for="genderChoice2">Female</label>
            </div>
          </div>
          <div className="submit-profile">
              <input type="submit" className="submit" value="SUBMIT"></input>
            </div>
        </div>
        
      </form>
    </div>
  );
}

export default ProfileInput;
