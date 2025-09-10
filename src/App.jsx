import { useState } from "react";
import Header from "./assets/Header/Header";
import { Hero } from "./assets/Hero/Hero";
import { Routes, Route } from "react-router";
import { Basic } from "./assets/Basic/Basic";
import { DATA } from "./assets/portfolio.data";
import Footer from "./assets/Footer/Footer.jsx";
import CV from "./assets/CV/CV.jsx";
import "./index.css";

function App() {
  // const [data, setData] = useState(DATA);

  return (
    <>
      <Header />
      <Hero />
      {/* 
      <Routes>
        <Route path="/" element={<Basic className="visually-hidden" />} />
        {data
          .filter((elm) => elm.title)
          .map((elm) => (
            <Route
              path={`/${elm.title.replace(" ", "").toLowerCase()}`}
              element={
                <Basic
                  title={elm.title}
                  txt={elm.txt}
                  skills={elm.skills}
                  languages={elm.languages}
                />
              }
            />
          ))}
      </Routes>
      <CV />
      <Footer /> */}
    </>
  );
}

export default App;
