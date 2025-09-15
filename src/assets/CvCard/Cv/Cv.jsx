import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import CvDocument from "../CvDocument/CvDocument";

const Cv = (props) => {
  const catchErr = async () => {
    try {
      const response = await axios.get(
        "https://server-portfolio-d60221dee326.herokuapp.com/cv"
      );
      if (response.status === 404) {
        throw new Error();
      }
      setRes(response.data[0]);
      handleOpenCvDoc(!openCvDoc);
    } catch (error) {
      console.log("Ne gruzit");
    }
  };

  const [closeIcon, setCloseIcon] = useState(false);
  const [openCvDoc, setOpenCvDoc] = useState(false);
  const [res, setRes] = useState();
  useEffect(() => {
    catchErr();
    setTimeout(() => {
      handle();
    }, 3000);
    return () => {};
  }, []);

  const handle = () => {
    setCloseIcon(!closeIcon);
  };

  const handleOpenCvDoc = () => {
    setOpenCvDoc(!openCvDoc);
  };
  return (
    <div className="z-20 backdrop-blur overflow-hidden fixed top-0 left-0 w-full h-full">
      <button
        onClick={props.handle}
        className={`${
          closeIcon ? "" : "hidden"
        } z-10 absolute top-5 right-5 border-2 cursor-pointer bg-gray-200 rounded-full focus:bg-red-400 hover:bg-red-400 active:bg-red-400 transition duration-300`}
        type="button">
        <IoIosClose size={35} />
      </button>
      {openCvDoc && <CvDocument res={res} />}
    </div>
  );
};

export default Cv;
