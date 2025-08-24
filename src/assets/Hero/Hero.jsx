import React from "react";
import style from "./Hero.module.css";
import { useState } from "react";
import { DATA } from "../portfolio.data";

export const Hero = (props) => {
  const [data] = useState(DATA[0]);

  return (
    <section>
      <div className={`container ${style.div}`}>
        <div className={style.divTxt}>
          <p>{data.txt}</p>
        </div>
        <img src={data.avatar} alt="" className={style.ava} />
      </div>
    </section>
  );
};
