import React from "react";
import { useState } from "react";
import Cv from "./CV/Cv";

const CvCard = (props) => {
  const [visible, setVisible] = useState(false);

  const handle = () => {
    setVisible(!visible);
  };
  return (
    <section className="bg-blue-50">
      <div className="container m-auto flex pt-10">
        <div
          onClick={handle}
          className="cursor-pointer m-auto block border shadow shadow-blue-600 hover:shadow-2xl rounded-2xl active:scale-105 active:shadow-2xl pl-20 pr-20 pt-5 pb-5 transition duration-300">
          <p className="tracking-widest font-mono font-semibold text-5xl text-blue-950">
            CV
          </p>
        </div>
        {visible && <Cv handle={handle} />}
      </div>
    </section>
  );
};

export default CvCard;
