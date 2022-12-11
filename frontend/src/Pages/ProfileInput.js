import React, { useEffect, useState } from "react";
import { BsFileImage } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";

import "../ProfileInput.css";
import useForm from "../components/useForm";
import Errs from "../components/errors";
import axios from "axios";

function ProfileInput() {
  const {
    handleChange,
    account,
    handleImage,
    user,
    setAccount,
    errors,
    handleUpdateAccount,
  } = useForm();
  // useEffect(()=>{
  //   const fecthGetAccount = async () => {
  //     try {
  //       const res = await axios.get(
  //         "http://localhost:8800/account/" + user.userName
  //       );
  //       setAccount(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fecthGetAccount()
  // },[])

  console.log(account);
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">Profile</h1>
        
          <button type="button" className="profile-nextbtn">Next
          <BiChevronRight/>
          </button>
        
      </div>
      <form className="profile-form">
        <div className="profile-image">
          <label for="input-profileimg" className="profile-img">
            <BsFileImage className="preview--icon" />

            {account.imagePreview && (
              <div>
                <img
                  alt="not fount"
                  width={"100%"}
                  src={account.imagePreview}
                />
              </div>
            )}
            <span>Upload your profile image</span>
          </label>

          <input
            type="file"
            hidden
            id="input-profileimg"
            name="image"
            onChange={handleImage}
          />
        </div>

        <div className="profile-input">
          <span> Name </span>
          <input
            type="text"
            placeholder="Enter your Name "
            name="name"
            defaultValue={account.name}
            onChange={handleChange}
            required
          ></input>
          {errors.name && <Errs err={errors.name} />}
          <span> Email </span>
          <input
            type="text"
            placeholder="Enter your email "
            name="gmail"
            onChange={handleChange}
            required
          ></input>
          {errors.gmail && <Errs err={errors.gmail} />}
          <span> Phone </span>
          <input
            type="text"
            placeholder="Enter your phone "
            name="phoneNumber"
            onChange={handleChange}
            required
          ></input>
          {errors.phoneNumber && <Errs err={errors.phoneNumber} />}
          <span> Gender </span>
          <div className="choice-gender-container">
            <div className="choice-gender">
              <input
                type="radio"
                id="genderChoice1"
                name="gender"
                value="male"
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
              <label for="genderChoice2">Female</label>
            </div>
          </div>
          <div className="submit-profile">
            <input
              type="submit"
              className="submit"
              value="SUBMIT"
              onClick={handleUpdateAccount}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfileInput;
