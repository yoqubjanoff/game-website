import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading/index";
import { Outlet } from "react-router-dom";
import { gsap, Power3 } from "gsap/gsap-core";
import Footer from "../../components/Footer";
const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header timeline={tl} ease={ease} />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
