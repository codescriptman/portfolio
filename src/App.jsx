import React from "react";
import Header from "./assets/Header/Header";
import Hero from "./assets/Hero/Hero";
import { Routes, Route } from "react-router";
import Footer from "./assets/Footer/Footer.jsx";
import "./index.css";
import Skills from "./assets/Skills/Skills.jsx";
import Contact from "./assets/Contact/Contact.jsx";
import CvCard from "./assets/CvCard/CvCard.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Routes>
        <Route path="skills" element={<Skills />} />
      </Routes>
      <CvCard />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
