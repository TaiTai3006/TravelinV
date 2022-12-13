import { Outlet, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { HiChevronDown } from "react-icons/hi";
import { MdOutlineCreate } from "react-icons/md";
import { IconContext } from "react-icons";
import { UserContext } from "../App";
import defaultAvatar from "../image/default_avatar.png";
import { VscListSelection } from "react-icons/vsc";
import logo from "../image/logo-removebg.png";
import logoGray from "../image/logo-gray-removebg-preview.png";
import Modal from "./Modal";

import "../App.css";
const Header = () => {
  const { user } = useContext(UserContext);
  const [isShow, setIsShow] = useState(false);
  console.log(user.accountType);
  const handleMouseOver = () => {
    setIsShow(true);
  };

  const handleMouseOut = () => {
    setIsShow(false);
  };
  const [Logo, setLogo] = useState(logo);
  

  const [navTop, setnavTop] = useState("0");
  const [navBGColor, setnavBGColor] = useState("#transparent");
  const [navColor, setnavColor] = useState("#353535");
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavBGColor("#353535")
      : setnavBGColor("transparent");
    window.scrollY > 10 ? setnavColor("#fcfcfc") : setnavColor("#353535");
    window.scrollY > 10 ? setnavTop("0") : setnavTop("0");
    window.scrollY > 10 ? setLogo(logoGray) : setLogo(logo);
    console.log(Logo)
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      <header
        style={{
          backgroundColor: navBGColor,
          top: navTop,
          color: navColor,
          transition: "all 1s",
        }}
      >
        <div className="nav-right">
          <Link to="/">
            <img className="logo-header " alt="logo" src={Logo}></img>
          </Link>
          <div id="nav">
            <Link
              to="/"
              style={{
                color: navColor,
              }}
            >
              Home
            </Link>
            <Link
              to="/Blogs"
              style={{
                color: navColor,
              }}
            >
              Blogs
            </Link>
            <Link
              to="/CreatePost"
              style={{
                color: navColor,
              }}
            >
              Create Post
              <IconContext.Provider value={{ className: "icon_shop" }}>
                <MdOutlineCreate
                  style={{
                    color: navColor,
                  }}
                />
              </IconContext.Provider>
            </Link>
            <Link
              to="/AboutUs"
              style={{
                color: navColor,
              }}
            >
              About us
            </Link>
          </div>
        </div>

        <ul id="nav1">
          <Modal
            style={{
              color: navColor,
            }}
          />
          {/* <li className="search">
            <a href="">
              Want to go ...
              <IconContext.Provider value={{ className: "icon_chevDown" }}>
                <HiChevronDown />
              </IconContext.Provider>
            </a>
          </li> */}
          <li>
            <a href="http://localhost:3000">
              <div className="image">
                <img
                  src={user.image ? user.image : defaultAvatar}
                  alt="avatar"
                ></img>
                <HiChevronDown
                  style={{
                    color: navColor,
                  }}
                />
              </div>
            </a>
            <ul className="avatar">
              {!user.loggedIn ? (
                <div>
                  <li>
                    <Link
                      to="/Login"
                     
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Register"
                      
                    >
                      Register
                    </Link>
                  </li>
                </div>
              ) : (
                <div>
                  <li>
                    <Link
                      to={`/Personal/${user.userName}`}
                      
                    >
                      Personal
                    </Link>
                  </li>
                  {user.accountType === "admin" && (
                    <li>
                      <Link to="/Dashboard">Dashboard</Link>
                    </li>
                  )}
                  {user.accountType === "collaborator" && (
                    <li>
                      <Link to="/Dashboard/Coll">Collaborator</Link>
                    </li>
                  )}
                  <li>
                    <Link to="/Logout">Logout</Link>
                  </li>
                </div>
              )}
            </ul>
          </li>
        </ul>
      </header>
    
      <Outlet />
    </>
  );
};

export default Header;
