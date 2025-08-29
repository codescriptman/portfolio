import React from "react";
import { IoLogoLinkedin, IoMail, IoLogoGithub } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import style from "./Socicns.module.css";

const Socicns = (props) => (
  <div className="socials">
    <a
      href="https://www.linkedin.com/in/zakhar-aleksieienko-1044ab368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      target="_blank">
      <IoLogoLinkedin className={style.icon} />
    </a>
    <a href="https://github.com/codescriptman" target="_blank">
      {" "}
      <IoLogoGithub className={style.icon} />
    </a>
    <a href="https://t.me/tmesxe" target="_blank">
      {" "}
      <FaTelegram className={style.icon} />
    </a>{" "}
    <a href="mailto:donazazello1312@gmail.com">
      <IoMail className={style.icon} />
    </a>
  </div>
);

export default Socicns;
