import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "./Burger/Burger";
import Nav from "./Nav/Nav";

const Header = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const [isOpen, setIsOpen] = useState(false);

  const handle = () => {
    setTimeout(() => {
      setIsOpen(true);
    }, 700);
  };

  return (
    <header className="border-b-1 border-black sticky">
      <div className="container flex md:m-auto">
        {isMobile && <BurgerMenu handle={handle} />}
        {isMobile && (
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className={`${isOpen ? "" : "hidden"}
              backdrop-blur fixed top-0 left-0 w-full h-full
              `}></div>
        )}

        <Nav class={isOpen ? "" : "overflow-hidden -translate-y-120"} />
      </div>
    </header>
  );
};
export default Header;
