import React, { useState, useContext } from "react";
import "../Login.css";
import { IconContext } from "react-icons";
import { ImNotification } from "react-icons/im";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginImage from "../image/loginImage.png";
import { FcGoogle } from "react-icons/fc";
import useForm from "../components/useForm";

function Login() {
  const {user,handleChangeLogin, errors, handelLogin} = useForm()
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

  return (
    <div>
      <img src={loginImage} height="auto" />
      <div class="signin">
        <div>
          <h1 class="A0">Welcome Back</h1>
        </div>
        <div class="flex1">
          <p class="A1">Don't have account?</p>
          <p class="A2">Sign up</p>
        </div>
        <div>
          <form>
            <div class="Info">
              <p class="useDis">Usename</p>
              <input
                type="text"
                placeholder="Enter your usename"
                defaultValue={user.userName}
                name='userName'
                onChange={handleChangeLogin}
                required
              ></input>
              <p class="passDis">Password</p>
              <div class="Input">
                <input
                  type={passwordType}
                  placeholder="Enter your password"
                  name="password"
                  onChange={handleChangeLogin}
                  required
                ></input>
                <span className="icons-span" onClick={handelToggle}>
                  {passwordIcon}
                </span>
              </div>
            </div>
            <div class="flex2">
              <input type="checkbox"></input>
              <p class="A3">Remember me</p>
              <p class="A4">Forgot Password</p>
            </div>
            {errors.login && (
                  <p className="notification">
                    {errors.login}{" "}
                    <IconContext.Provider
                      value={{ className: "icon_ImNotification" }}
                    >
                      <ImNotification />
                    </IconContext.Provider>
                  </p>
                )}
            <input type="submit" value="Sign in" class="IP1" onClick={handelLogin}></input>
            <p class="A5">Or</p>
            <input
              type="submit"
              value="Sign in with Google"
              class="IP2"
            ></input>
            <div class="icon1">
              <FcGoogle />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
