import React from "react";
import "./Footer.css";
import Wave from "../../assets/img/wave.png";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
      
  return (
    <div className="footer">
    <img src={Wave} alt="" style={{ width: "100%" }} />
    <div className="f-content">

      <ul className="footer-ul">
            <li className="footer-li"><FaMobileAlt/> 01989139570</li>
            <li className="footer-li"><FaMobileAlt/> 01782283171</li>
            <li className="footer-li"><FaEnvelope/> mhakash5000@gmail.com</li>
      </ul>


      <div className="f-icons">
          <a href="https://github.com/mhakash5000" target="_blank" className="social-icon"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/md-makbul-hosen-5620b1158/" target="_blank" className="social-icon"><FaLinkedin/></a>
          <a href="https://www.instagram.com/mhakash77/" target="_blank" className="social-icon"><FaInstagramSquare/></a>
          <a href="https://www.facebook.com/mhakash5000" target="_blank" className="social-icon"><FaFacebook/></a>
          <a href="https://www.facebook.com/mhakash5000" target="_blank" className="social-icon"><FaTwitterSquare/></a>
      </div>
     
   </div>
  </div>
  );
};

export default Footer;
