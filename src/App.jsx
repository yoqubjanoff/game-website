import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pcgame from "./pages/PCgames";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pcgame" element={<Pcgame />} />
      </Routes>
    </>
  );
}

export default App;
