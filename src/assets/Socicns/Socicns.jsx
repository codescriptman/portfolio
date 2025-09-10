import React from "react";
import { IoLogoLinkedin, IoMail, IoLogoGithub } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";

const Socicns = (props) => {
  return (
    <div className={`${props.class} flex m-auto gap-x-3 md:align-middle`}>
      <a
        className="hover:scale-125 hover:fill-blue-900 active:scale-125 active:fill-blue-900   transition duration-200"
        href="https://www.linkedin.com/in/zakhar-aleksieienko-1044ab368"
        target="_blank">
        <IoLogoLinkedin
          size="2em"
          color="#6495ED
          
        "
          className="hover:fill-blue-900 active:fill-blue-900"
        />
      </a>
      <a
        className="hover:scale-125 hover:fill-blue-900 active:scale-125  transition duration-200"
        href="https://github.com/codescriptman"
        target="_blank">
        <IoLogoGithub
          size="2em"
          color="#6495ED
        "
          className="hover:fill-blue-900 active:fill-blue-900"
        />
      </a>
      <a
        className="hover:scale-125 hover:fill-blue-900 active:scale-125  transition duration-200"
        href="https://t.me/tmesxe"
        target="_blank">
        <FaTelegram
          size="2em"
          color="#6495ED
        "
          className="hover:fill-blue-900 active:fill-blue-900"
        />
      </a>
      <a
        className="hover:scale-125 hover:fill-blue-900 active:scale-125  transition duration-200"
        href="mailto:donazazello1312@gmail.com">
        <IoMail
          size="2em"
          color="#6495ED
        "
          className="hover:fill-blue-900  active:fill-blue-900"
        />
      </a>
    </div>
  );
};

export default Socicns;
