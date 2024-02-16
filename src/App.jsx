import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pcgame from "./pages/PCgames";
import MobileGames from "./pages/MobileGame";
import Blog from "./pages/BlogPage";
import Contact from "./pages/ContactUs";
import MainLayout from "./layout/MainLayout";
import AdminView from "./pages/Admin";
import { SidebarData } from "./utils/admin";
import { Suspense, lazy } from "react";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/pcgame" element={<Pcgame />} />
          <Route path="/mobilegame" element={<MobileGames />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
          <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminView />}>
          {SidebarData?.map(({ path, component: Component }, i) => (
            <Route path={path} element={<Component />} key={i} />
          ))}
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
