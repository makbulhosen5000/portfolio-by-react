import React from "react";
import "./Footer.css";
import Wave from "../../assets/img/wave.png";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mhakash5000@gmail.com</span>
        <div className="f-icons">
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} /> */}
                <a href="https://github.com/mhakash5000" target="_blank"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/md-makbul-hosen-5620b1158/" target="_blank"><FaLinkedin/></a>
                <a href="https://www.instagram.com/mhakash77/" target="_blank"><FaInstagramSquare/></a>
                <a href="https://www.facebook.com/mhakash5000" target="_blank"><FaFacebook/></a>
                <a href="https://www.facebook.com/mhakash5000" target="_blank"><FaTwitterSquare/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
