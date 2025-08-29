import React from "react";
import style from "./Header.module.css";
import { DATA } from "../portfolio.data";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useSwipeable } from "react-swipeable";
import { NavLink } from "react-router";

export const Header = (props) => {
  const [data] = useState(DATA);
  const [isOpen, setOpen] = useState();
  const handlers = useSwipeable({
    onSwipedLeft: () => setOpen(!isOpen),
  });

  return (
    <header className={style.header}>
      <div className={`container ${style.div}`}>
        <IoMenu
          color="#646cff"
          className={style.icon}
          onClick={() => setOpen(!isOpen)}
        />

        <nav
          {...handlers}
          className={`${style.nav} ${isOpen ? style.active : ""}`}
          onSwiped={() => setOpen(!isOpen)}>
          <ul className={style.list}>
            {data
              .filter((elm) => elm.title)
              .map((elm) => (
                <li key={elm.title} className={style.item}>
                  <NavLink
                    to={`/${elm.title.replace(" ", "").toLowerCase()}`}
                    className={style.itemLink}>
                    {elm.title}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
