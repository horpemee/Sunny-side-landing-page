import React, { useState } from "react";
import "./navbar.scss";
import logo from "..//images/logo.svg";
import hamburger from "..//images/icon-hamburger.svg";
import arrow from "..//images/icon-arrow-down.svg";
// import { useRef } from "react";

const Navbar = () => {
  const [showdropDown, setShowDropDown] = useState(false);
  return (
    <div className="wrapper">
      <div className="hero">
        <div className="main-container">
          <h2 className="navName">
            <a href="#sunny">
              <img src={logo} alt="logo" />
            </a>
          </h2>
          <ul className="navList">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <span className="spans">
                <a href="#span" className="contact">
                  Contact
                </a>
              </span>
            </li>
          </ul>
          <div className="hamburger">
            <img
              src={hamburger}
              alt="hamburger"
              onClick={() => setShowDropDown(!showdropDown)}
            />
          </div>

          {showdropDown && (
            <ul className="dropdown">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <span className="contact">
                  <a href="#span" className="contact">
                    Contact
                  </a>
                </span>
              </li>
            </ul>
          )}
        </div>

        <div className="heroContent">
          <h1>We are creatives</h1>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
