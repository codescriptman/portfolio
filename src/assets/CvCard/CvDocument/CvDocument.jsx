import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useEffect, useRef } from "react";
import { data } from "react-router";

const CvDocument = (props) => {
  const data = props.res;

  const printRef = useRef(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) {
      return;
    }

    const canvas = await html2canvas(element, {
      onclone: (Document, element) => {
        element.classList.remove(
          "overflow-y-scroll",
          "max-h-95/100",
          "absolute",
          "transform",
          "-translate-x-1/2",
          "-translate-y-1/2"
        );
        element.classList.add("overflow-visible", "relative");
      },
      scale: 2,
    });
    const screenshot = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    const imageProperties = pdf.getImageProperties(screenshot);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imageProperties.height * pdfWidth) / imageProperties.width;
    pdf.addImage(screenshot, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("cv.pdf");
  };
  return (
    <>
      {/* <div
        ref={printRef}
        className="modal-content overflow-y-scroll font-CV-text text-2xl leading-relaxed container border-2 m-auto absolute bg-[#fff] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 max-h-95/100 min-h-0">
        <h2 className="text-center text-[#1d4ed8] text-7xl font-CV-title mb-10">
          {data.title}
        </h2>
        <div className="mb-5">
          <p className="">{data.name}</p>
        </div>
        <div className="mb-5 flex flex-row gap-3">
          <p>Contact: </p>
          <ul className="flex flex-row gap-3 flex-wrap">
            {data.contact.map((contact) => {
              return (
                <li>
                  <p>{contact}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-5">
          <p>Position: {data.position}</p>
        </div>
        <div className="mb-5 flex flex-row gap-3">
          <p>Skills: </p>
          <ul className="flex flex-row gap-3 flex-wrap">
            {data.skills.map((skill) => {
              return (
                <li>
                  <p>{skill}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-5 flex flex-row gap-3">
          <p>Languages: </p>
          <ul className="flex flex-row gap-3 flex-wrap">
            {data.languages.map((language) => {
              return (
                <li>
                  <p>{language}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-5 flex flex-row gap-3">
          <p>Projects:</p>
          <ul className="">
            <li className="mb-5 flex flex-row gap-3">
              <span>Portfolio:</span>
              <p> {data.projects.portfolio}</p>
            </li>
            <li className="flex flex-row gap-3">
              <span>Study: </span>
              <p> {data.projects.study}</p>
            </li>
          </ul>
        </div>
        <div className="mb-5 flex flex-row gap-3">
          <p>Education: </p>
          <ul className="flex flex-row gap-3 flex-wrap">
            {data.education.map((education) => {
              return (
                <li>
                  <p>{education}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-5 flex flex-row gap-3">
          <span>
            <p>About Me:</p>
          </span>
          <p>{data.aboutme}</p>
        </div>
        <div className="mb-5 flex flex-row gap-3">
          <p>Hobby: </p>
          <ul className="flex flex-row gap-3 flex-wrap">
            {data.hobby.map((hobby) => {
              return (
                <li>
                  <p>{hobby}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div> */}
      <div
        ref={printRef}
        className="modal-content overflow-y-scroll font-CV-text text-2xl leading-relaxed container m-auto absolute bg-[#fff] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 max-h-95/100 min-h-0">
        <h2 className="text-center text-[#1d4ed8] text-7xl font-CV-title mb-10">
          {data.title}
        </h2>

        <div className="mb-8 text-2xl font-semibold">
          <p>{data.name}</p>
        </div>

        <div className="mb-8 text-lg">
          <p className="font-semibold text-[#1d4ed8] border-b border-[#D1D5DB] pb-1 mb-2">
            Contact:
          </p>
          <ul className="flex flex-wrap gap-4">
            {data.contact.map((contact) => {
              return (
                <li key={contact}>
                  <p>{contact}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mb-8 text-lg">
          <p className="font-semibold text-[#1d4ed8] border-b border-[#D1D5DB] pb-1 mb-2">
            Position:
          </p>
          <p>{data.position}</p>
        </div>

        <div className="mb-8 text-lg">
          <p className="font-semibold text-[#1d4ed8] border-b border-[#D1D5DB] pb-1 mb-2">
            Skills:
          </p>
          <ul className="flex flex-wrap gap-3">
            {data.skills.map((skill) => {
              return (
                <li key={skill}>
                  <p>{skill}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mb-8 text-lg">
          <p className="font-semibold text-[#1d4ed8] border-b border-[#D1D5DB] pb-1 mb-2">
            Languages:
          </p>
          <ul className="flex flex-wrap gap-4">
            {data.languages.map((language) => {
              return (
                <li key={language}>
                  <p>{language}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mb-8 text-lg">
          <p className="font-semibold text-[#1d4ed8] border-b border-[#D1D5DB] pb-1 mb-2">
            Projects:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-2">
              <span className="font-medium">Portfolio:</span>
              <p>{data.projects.portfolio}</p>
            </li>
            <li className="flex gap-2">
              <span className="font-medium">Study:</span>
              <p>{data.projects.study}</p>
            </li>
          </ul>
        </div>

        <div className="mb-8 text-lg">
          <p className="font-semibold text-[#1d4ed8] border-b border-[#D1D5DB] pb-1 mb-2">
            Education:
          </p>
          <ul className="space-y-2">
            {data.education.map((education) => {
              return (
                <li key={education}>
                  <p>{education}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mb-8 text-lg">
          <p className="font-semibold text-[#1d4ed8] border-b border-[#D1D5DB] pb-1 mb-2">
            About Me:
          </p>
          <p>{data.aboutme}</p>
        </div>

        <div className="mb-4 text-lg">
          <p className="font-semibold text-[#1d4ed8] border-b border-[#D1D5DB] pb-1 mb-2">
            Hobby:
          </p>
          <ul className="flex flex-wrap gap-4">
            {data.hobby.map((hobby) => {
              return (
                <li key={hobby}>
                  <p>{hobby}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <button
          onClick={handleDownloadPdf}
          className="hover:bg-blue-500 w-40 p-2 uppercase rounded-2xl font-bold bg-blue-400
      active:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-600
      disabled:cursor-auto transition duration-200 focus:bg-blue-600
      focus:text-white cursor-pointer absolute top-18/20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          Download PDF
        </button>
      </div>
    </>
  );
};

export default CvDocument;

// const canvas = await html2canvas(element);
// const data = canvas.toDataURL("image/png");
// const pdf = new jsPDF({
//   orientation: "portrait",
//   unit: "px",
//   format: "a4",
// });

// const imgProperties = pdf.getImageProperties(data);
// const pdfWidth = pdf.internal.pageSize.getWidth();
// const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
// pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
// pdf.save("cv.pdf");
