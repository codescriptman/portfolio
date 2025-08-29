import React from "react";
import Socicns from "../Socicns/Socicns";
import style from "./Footer.module.css";

const Footer = (props) => (
  <footer className={style.footer}>
    <div className={`container ${style.div}`}>
      <Socicns />
      <address>
        <a href="mailto:donazazello1312@gmail.com">
          <p>donazazello1312@gmail.com</p>
        </a>
        <a href="tel:+380930485668">
          <p>+38 (093) 048-56-68</p>
        </a>
      </address>
    </div>
  </footer>
);

export default Footer;
