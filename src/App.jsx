import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pcgame from "./pages/PCgames";
import Footer from "./components/Footer";
import { gsap, Power3} from "gsap/gsap-core";

function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
    <>
      <Header timeline={tl} ease={ease}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pcgame" element={<Pcgame />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
