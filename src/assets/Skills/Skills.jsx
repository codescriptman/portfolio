import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { DATA } from "../portfolio.data";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDartLang } from "react-icons/fa6";

const Skills = (props) => {
  const icons = [FaHtml5, SiCsswizardry, IoLogoJavascript, FaDartLang];
  const refNavComponent = useOutletContext();

  useEffect(() => {
    const section = refNavComponent.current;
    if (!section) {
      return;
    }
    setTimeout(() => {
      const rect = section.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 400);
  }, []);

  return (
    <section ref={refNavComponent} className="bg-blue-50">
      <div className="container m-auto pt-10 ">
        <h2 className="text-center font-bold uppercase text-5xl">skills</h2>
        {icons.map((Icon, index) => (
          <div key={index}>
            <Icon size="80" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
