import React from "react";
import { IoMdDownload } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
import style from "./CV.module.css";
import { useState } from "react";
import { DATA } from "../portfolio.data";

const CV = (props) => {
  const [data] = useState(DATA[1]);

  return (
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
        <a className={style.link} href={data.CV} download="CV.pdf">
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
};

export default CV;
