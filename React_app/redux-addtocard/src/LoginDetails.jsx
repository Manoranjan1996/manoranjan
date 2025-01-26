import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./signin/Home";
import Login from "./signin/LoginUser";
import { Routes, Route } from "react-router-dom";
import Details from "./signin/Details";
// import Error from "./signin/Error";

function LoginDetails() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/LoginUser" element={<Login />} />
        <Route path="/details" element={<Details />} />
        {/* <Route path="/*" element={<Error />} /> */}
      </Routes>
    </>
  );
}

export default LoginDetails;
