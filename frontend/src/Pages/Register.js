import React from "react";
import { useState, useEffect } from "react";
import "../Register.css";
import { IconContext } from "react-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImNotification } from "react-icons/im";
import loginImage from "../image/loginImage.png";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import useForm from "../components/useForm";

function Register() {
  // const [checkConfirmPw, setCheckConfirmPw] = useState();
  // const [checkAccounts, setCheckAccount] = useState({});
  // const [confirmPassword, setConfirmPassword] = useState();
  // const handleChange = (e) => {
  //   setAccount((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  // const handleCreateAccount = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:8800/account", account);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   const fecthCheckAccout = async () => {
  //     try {
  //       const res = await axios.get(
  //         "http://localhost:8800/account/" + account.userName
  //       );
  //       setCheckAccount(
  //         res.data.reduce((t, v) => {
  //           const { name, ...rest } = v;
  //           t = rest;
  //           return t;
  //         }, {})
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   account.userName && fecthCheckAccout();
  // }, [account.userName]);
  // console.log(account)
  const { handleChange, account, handleCreateAccount, errors } = useForm();
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />);
  const handelToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(FaEye);
    } else {
      setPasswordType("password");
      setPasswordIcon(FaEyeSlash);
    }
  };

  const [confirmPasswordType, setPasswordTypeCon] = useState("password");
  const [passwordIconCon, setPasswordIconCon] = useState(<FaEyeSlash />);
  const handelToggleCon = () => {
    if (confirmPasswordType === "password") {
      setPasswordTypeCon("text");
      setPasswordIconCon(FaEye);
    } else {
      setPasswordTypeCon("password");
      setPasswordIconCon(FaEyeSlash);
    }
  };
  return (
    <div>
      <img src={loginImage} height="auto" />
      <div class="register">
        <div>
          <h1 class="A0">Let get your Started</h1>
        </div>
        <div class="flex1">
          <p class="A1">Already have an account?</p>
          <p class="A2">Sign in</p>
        </div>
        <div>
          <form>
            <div class="Info">
              <p class="useDis">Usename</p>
              <input
                type="text"
                placeholder="Enter your usename"
                name="userName"
                onChange={handleChange}
                required
              ></input>
              {errors.userName && (
                <p className="notification">
                  Username already exists{" "}
                  <IconContext.Provider
                    value={{ className: "icon_ImNotification" }}
                  >
                    <ImNotification />
                  </IconContext.Provider>
                </p>
              )}
              <p class="passDis">Password</p>
              <div class="Input">
                <input
                  type={passwordType}
                  placeholder="Enter your password"
                  name="password"
                  onChange={handleChange}
                  required
                ></input>
                <span className="icons-span-1" onClick={handelToggle}>
                  {passwordIcon}
                </span>
              </div>
              <p class="confDis">Confirm Password</p>
              <div class="InputCon">
                <input
                  type={confirmPasswordType}
                  placeholder="Confirm your password"
                  // onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                ></input>
                <span className="icons-span-2" onClick={handelToggleCon}>
                  {passwordIconCon}
                </span>
              </div>
              {/* {checkConfirmPw && (
                <p className="notification">
                  Username already exists{" "}
                  <IconContext.Provider
                    value={{ className: "icon_ImNotification" }}
                  >
                    <ImNotification />
                  </IconContext.Provider>
                </p>
              )} */}
            </div>
            <div class="flex2">
              <input type="checkbox" required></input>
              <p class="A3">I accepted with terms and conditions</p>
            </div>
            <input
              type="submit"
              value="Sign up"
              class="IP1"
              // onClick={handleCreateAccount}
              onClick={console.log(1)}
            ></input>
            <p class="A5">Or</p>
            <input
              type="submit"
              value="Sign in with Google"
              class="IP2"
            ></input>
            <div class="icon">
              <FcGoogle />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
