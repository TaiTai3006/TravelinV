import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { HiChevronDown } from "react-icons/hi";
import { IconContext } from "react-icons";
import { UserContext } from "../App";
import defaultAvatar from "../image/default_avatar.png";
import "../App.css";
const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <header>
        <div id="nav">
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
        <ul id="nav1">
          <li className="search">
            <a href="">
              Want to go ...
              <IconContext.Provider value={{ className: "icon_chevDown" }}>
                <HiChevronDown />
              </IconContext.Provider>
            </a>
          </li>
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
      <Outlet />
    </>
  );
};

export default Header;
