import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { HiChevronDown } from "react-icons/hi";
import { IconContext } from "react-icons";
import "../App.css";
const Header = () => {
  const [str, setStr] = useState(
    "https://vivureviews.com/wp-content/uploads/2022/08/avatar-vo-danh-9.png"
  );
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
                <img  src={str} alt="avatar"></img>
                <HiChevronDown />
              </div>
            </a>
            <ul className="avatar">
              {str ===
              "https://vivureviews.com/wp-content/uploads/2022/08/avatar-vo-danh-9.png" ? (
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
