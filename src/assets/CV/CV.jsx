import React from "react";
import { IoMdDownload } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
import style from "./CV.module.css";

const CV = (props) => (
  <section>
    <div className={`container ${style.container}`}>
      <a
        className={style.link}
        href="https://github.com/codescriptman"
        target="_blank">
        <div className={style.div}>
          <span>
            <IoLogoGithub className={style.icon} />
          </span>
        </div>
      </a>
      <a
        className={style.link}
        href="../../../public/img/cv/CV.pdf"
        download="CV.pdf">
        <div className={style.div}>
          <p className={style.txt}>CV</p>{" "}
          <span>
            <IoMdDownload className={style.icon} />
          </span>
        </div>
      </a>
    </div>
  </section>
);

export default CV;
