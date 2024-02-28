import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading/index";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header/>
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
