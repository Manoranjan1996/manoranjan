import React from "react";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
