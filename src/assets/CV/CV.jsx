import React from "react";
import { IoMdDownload } from "react-icons/io";
import style from "./CV.module.css";

const CV = (props) => (
  <section>
    <div className={`container ${style.container}`}>
      <div className={style.div}>
        <a className={style.link} href="">
          CV{" "}
          <span>
            <IoMdDownload className={style.icon} />
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default CV;
