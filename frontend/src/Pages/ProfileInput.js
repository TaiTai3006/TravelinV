import React, { useEffect } from "react";
import { BsFileImage } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import axios from "axios";

import "../ProfileInput.css";
import useForm from "../components/useForm";
import Errs from "../components/errors";
import { useLocation, useNavigate } from "react-router-dom";

function ProfileInput() {
  const location = useLocation();
  const {
    user,
    handleChange,
    account,
    setErrors,
    handleImage,
    errors,
    handleUpdateAccount,
    setAccount,
    
  } = useForm();
  const navigate = useNavigate();
  useEffect(() => {
    const fecthGetAccount = () => {
      axios
        .get(`http://localhost:8800/account/${location.pathname.split("/")[2]}`)
        .then((res) =>
         { setAccount({
            ...account,
            name: res.data[0].name,
            imagePreview: res.data[0].avatar,
            avatar: res.data[0].avatar,
            gender: res.data[0].gender,
            phoneNumber: res.data[0].phoneNumber,
            gmail: res.data[0].gmail,
          })
          const newSetUser = {
            ...user,
            accountType: res.data[0].accountType,
            image: res.data[0].avatar,
          };
          const jsonUser = JSON.stringify(newSetUser);
          localStorage.setItem("user", jsonUser);
          setErrors('')
        }
        );
    };
    location.pathname.split("/")[2] && fecthGetAccount();
  }, [location]);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">Profile</h1>

        <button
          onClick={() => {
            navigate("/Login");
          }}
          type="button"
          className="profile-nextbtn"
        >
          Next
          <BiChevronRight />
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
            name="avatar"
            onChange={handleImage}
          />
        </div>

        <div className="profile-input">
          <span> Name </span>
          <input
            type="text"
            placeholder="Enter your Name "
            name="name"
            value={account.name}
            onChange={handleChange}
            required
          ></input>
          {errors.name && <Errs err={errors.name} />}
          <span> Email </span>
          <input
            type="text"
            placeholder="Enter your email "
            name="gmail"
            value={account.gmail}
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
            value={account.phoneNumber}
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
                checked = {account.gender === 'male' && 'false'}
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
                checked = {account.gender === 'female' && 'false'}
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
