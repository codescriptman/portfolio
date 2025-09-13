import React, { useEffect, useRef, useState } from "react";

const Skills = (props) => {
  const navItem = useRef(null);
  const [visible, setVisible] = useState();

  const scrollToComponent = () => {
    setTimeout(() => {
      if (location.pathname === "/skills") {
        navItem.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 400);

    return () => {
      setVisible(true);
    };
  };

  useEffect(scrollToComponent);
  return (
    <section ref={navItem} className="bg-blue-50">
      <div className="container m-auto pt-10">
        <h2 className="text-center font-bold uppercase text-5xl">skills</h2>
      </div>
    </section>
  );
};

export default Skills;
