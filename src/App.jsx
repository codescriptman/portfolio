import React, { createContext, useRef } from "react";
import Header from "./assets/Header/Header";
import Hero from "./assets/Hero/Hero";
import { Routes, Route, Outlet } from "react-router";
import Footer from "./assets/Footer/Footer.jsx";
import "./index.css";
import Skills from "./assets/Skills/Skills.jsx";
import Contact from "./assets/Contact/Contact.jsx";
import CvCard from "./assets/CvCard/CvCard.jsx";

export const RefContext = createContext();

function App() {
  const refNavComponent = useRef(null);
  return (
    <>
      <RefContext value={refNavComponent}>
        <Header />
        <Hero />
        <Outlet context={refNavComponent} />
        <CvCard />
        <Contact />
        <Footer />
      </RefContext>
    </>
  );
}

export default App;
