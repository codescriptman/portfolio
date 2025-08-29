import React from "react";
import { DATA } from "../portfolio.data";
import { useState } from "react";
import style from "./Basic.module.css";
import { SiCsswizardry, SiVite } from "react-icons/si";
import { FaHtml5, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineApi } from "react-icons/ai";
import { FaDartLang, FaFlutter } from "react-icons/fa6";

const iconMap = {
  FaHtml5,
  SiCsswizardry,
  IoLogoJavascript,
  FaReact,
  FaGitAlt,
  FaGithub,
  AiOutlineApi,
  SiVite,
  FaDartLang,
  FaFlutter,
};

export const Basic = (props) => {
  return (
    <section className={props.className}>
      <div className="container">
        <h2>{props.title}</h2>
        <Info
          txt={props.txt}
          title={props.title}
          skills={props.skills}
          languages={props.languages}
        />
      </div>
    </section>
  );
};

const Info = (props) => {
  if (props.title === "Skills") {
    return (
      <>
        <ul className={style.skillsList}>
          {props.skills.map((skill) => {
            const IconComponent = iconMap[skill.icon];
            return (
              <li className={style.skills} key={skill.name}>
                {<IconComponent className={style.icon} />}{" "}
                <p className={style.txt}>{skill.name}</p>
              </li>
            );
          })}
        </ul>
        <h2>Languages</h2>
        <ul className={style.languages}>
          {props.languages.map((lang) => (
            <li className={style.lang} key={lang}>
              {lang}
            </li>
          ))}
        </ul>
      </>
    );
  } else if (props.title === "Experience") {
    const targetPhrase = "GitHub profile";
    const githubUrl = "https://github.com/codescriptman";
    const renderWithLink = (text) => {
      const parts = text.split(targetPhrase);
      if (parts.length === 1) return text;
      return parts.reduce((acc, part, idx) => {
        if (idx === 0) return [part];
        return [
          ...acc,
          <a
            href={githubUrl}
            key={idx}
            target="_blank"
            rel="noopener noreferrer">
            {targetPhrase}
          </a>,
          part,
        ];
      }, []);
    };

    return <p>{renderWithLink(props.txt)}</p>;
  } else if (props.title === "Education") {
    return (
      <ul>
        {props.txt.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p>{props.txt}</p>;
};
