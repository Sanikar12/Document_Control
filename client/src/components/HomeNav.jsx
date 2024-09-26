import React, { useState } from "react";
import "../styles/HomeNav.css";
import { MenuItems } from "./MenuItems.js";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import { LoginPage } from "./login.jsx";

export const Hnavbar = () => {
  const [isClicked, setClicked] = useState(false);
  console.log(MenuItems);
  return (
    <nav className="NavbarItems">
      <a href="/">
      <img className="navbar-logo" src={logo} alt=""  />
      </a>

      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return (
            <li
              key={index}
              className={isClicked ? "nav-menu active" : "nav-menu"}
            >
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};


