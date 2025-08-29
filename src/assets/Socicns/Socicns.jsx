import React from "react";
import { IoLogoLinkedin, IoMail, IoLogoGithub } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";

const Socicns = (props) => (
  <div className="socials">
    <a href="">
      <IoLogoLinkedin />
    </a>
    <a href="">
      {" "}
      <IoLogoGithub />
    </a>
    <a href="">
      {" "}
      <FaTelegram />
    </a>{" "}
    <a href="mailto:">
      <IoMail />
    </a>
  </div>
);

export default Socicns;
