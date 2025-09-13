import React, { useEffect, useRef } from "react";
import { DATA } from "../../portfolio.data";
import { useState } from "react";
import { NavLink } from "react-router";
import Socicns from "../../Socicns/Socicns";

const Nav = (props) => {
  const [data] = useState(DATA);

  return (
    <nav
      className={`${props.class} border-b-1 border-black  w-full fixed 
        flex flex-col  justify-center bg-white h-1/2 items-end transition ease-in-out duration-500
        md:static md:overflow-auto md:bg-transparent md:translate-0 md:border-0 md:flex-row md:justify-between md:items-center`}>
      <Socicns class="md:order-1" />
      <ul
        className="h-3/4 flex-col justify-end flex m-auto md:flex-row md:gap-10 md:m-0
      ">
        {data
          .filter((elm) => elm.title)
          .map((elm) => (
            <li
              key={elm.title}
              className="p-2 m-1 hover:overflow-hidden active:rounded-4xl active:bg-blue-200 hover:rounded-4xl hover:bg-blue-200 duration-250 transition ease-in-out">
              <NavLink
                onClick={props.handle}
                to={`/${elm.title.replace(" ", "").toLowerCase()}#skills`}
                className="p-0 m-0">
                <p className="text-xl font-medium text-center tracking-wide uppercase">
                  {elm.title}
                </p>
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;

//  {...handlers}
//       className={`${style.nav} ${isOpen ? style.active : ""}`}
//       onSwiped={() => setOpen(!isOpen)}>

//   <a href="https://github.com/codescriptman" target="_blank">
//     <IoLogoGithub className={`${style.icon} ${style.git}`} />
//   </a>;
