import { useState } from "react";
import { Header } from "./assets/Header/Header";
import { Hero } from "./assets/Hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
