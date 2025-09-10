import React from "react";
import { IoMenu } from "react-icons/io5";

const BurgerMenu = (props) => (
  <button
    onClick={props.handle}
    type="button"
    className="active:rounded-4xl active:bg-blue-200 duration-250 transition-colors">
    <IoMenu size="4em" />
  </button>
);
export default BurgerMenu;
