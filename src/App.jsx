import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pcgame from "./pages/PCgames";
import MobileGames from "./pages/MobileGame";
import Blog from "./pages/BlogPage";
import Contact from "./pages/ContactUs";
import MainLayout from "./layout/MainLayout";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/pcgame" element={<Pcgame />} />
          <Route path="/mobilegame" element={<MobileGames />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </>
  );
}

export default App;

