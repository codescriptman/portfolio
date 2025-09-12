import React from "react";
import { useState } from "react";
import { DATA } from "../portfolio.data";

const Hero = (props) => {
  const [data] = useState(DATA[0]);

  return (
    <section className="bg-blue-50 pt-15">
      <div className="container flex flex-col m-auto pt-2 pl-2 pr-2 md:flex-row md:pt-6 md:gap-4">
        <div className="m-auto mb-2 md:m-0 ">
          <p className="text-2xl md:text-lg block text-justify">{data.txt}</p>
        </div>
        <img
          src={data.avatar}
          alt="Zakhar Aleksieienko"
          className="rounded-3xl m-auto h-100 w-90 object-cover hover:scale-105 active:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
