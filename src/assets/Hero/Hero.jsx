import React from "react";
import { useState } from "react";
import { DATA } from "../portfolio.data";

export const Hero = (props) => {
  const [data] = useState(DATA[0]);

  return (
    <section>
      <div className="container flex">
        <div className="m-auto">
          <p className="text-2xl">{data.txt}</p>
        </div>
        <img
          src={data.avatar}
          alt="Zakhar Aleksieienko"
          className="rounded-3xl m-auto h-100 w-100 object-cover"
        />
      </div>
    </section>
  );
};
