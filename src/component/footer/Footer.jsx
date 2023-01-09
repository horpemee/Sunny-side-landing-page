import React from "react";
import "./footer.scss";
import logo from "../../component/footer/images/logo.svg";
import facebook from "../../component/footer/images/icon-facebook.svg";
import instagram from "../../component/footer/images/icon-instagram.svg";
import pinterest from "../../component/footer/images/icon-pinterest.svg";
import twitter from "../../component/footer/images/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" className="logo" />

      <ul className="links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>

      <div className="links social-logos">
        <img src={facebook} alt="facebook" className="icon" />
        <img src={instagram} alt="instagram" className="icon" />
        <img src={twitter} alt="twitter" className="icon" />
        <img src={pinterest} alt="pinterest" className="icon" />
      </div>
    </div>
  );
};

export default Footer;
