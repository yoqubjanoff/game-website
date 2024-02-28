import React from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { SidebarData } from "./utils/admin";
import Loading from "./components/Loading";

const Home = lazy(() =>        import("./pages/Home"));
const Pcgame = lazy(() =>      import("./pages/PCgames"));
const MobileGames = lazy(() => import("./pages/MobileGame"));
const Blog = lazy(() =>        import("./pages/BlogPage"));
const Contact = lazy(() =>     import("./pages/ContactUs"));
const MainLayout = lazy(() =>  import("./layout/MainLayout"));
const AdminView = lazy(() =>   import("./pages/Admin"));
const NotFound = lazy(() =>    import("./pages/NotFound"));
const Register = lazy(() =>    import("./pages/Register"));

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
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
