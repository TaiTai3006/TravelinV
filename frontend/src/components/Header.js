import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { HiChevronDown } from "react-icons/hi";
import { MdOutlineCreate } from "react-icons/md";
import { IconContext } from "react-icons";
import { UserContext } from "../App";
import defaultAvatar from "../image/default_avatar.png";
import { VscListSelection } from "react-icons/vsc";
import logo from "../image/logo-removebg.png";
import Modal from "./Modal";

import "../App.css";
const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <header>
        <div className="nav-right">
        <Link to="/">
          <img className="logo-header " alt="logo" src={logo}></img>
        </Link>
        <div id="nav">
          <Link to="/">Home</Link>
          <Link to="/Blogs">Blogs</Link>
          <Link to="/CreatePost">
            Create Post
            <IconContext.Provider value={{ className: "icon_shop" }}>
              <MdOutlineCreate />
            </IconContext.Provider>
          </Link>
          <Link to="/AboutUs">About us</Link>
        </div>
        </div>
        

        <ul id="nav1">
       <Modal/>
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
                <HiChevronDown />
              </div>
            </a>
            <ul className="avatar">
              {!user.loggedIn ? (
                <div>
                  <li>
                    <Link to="/Login">Login</Link>
                  </li>
                  <li>
                    <Link to="/Register">Register</Link>
                  </li>
                </div>
              ) : (
                <div>
                  <li>
                    <Link to="/Personal">Personal</Link>
                  </li>
                  {user.accountType === "admin" && (
                    <li>
                      <Link to="/Dashboard">Dashboard</Link>
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
      <nav>
        <div class="nav-column">
          <input
            type="checkbox"
            class="nav__checkbox"
            id="nav-toggle"
            aria-label="checkBox"
          />

          <label for="nav-toggle" class="nav__button">
            <VscListSelection />
          </label>
          <div class="nav__background"></div>

          <div id="nav-item">
            <Link to="/">logo</Link>
            <Link to="/">Home</Link>
            <Link to="/Blogs">Blogs</Link>
            <Link to="/Shop">
              Shop
              <IconContext.Provider value={{ className: "icon_shop" }}>
                <RiShoppingBasket2Line />
              </IconContext.Provider>
            </Link>
            <Link to="/AboutUs">About us</Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
