import "./App.css";
import About from "./component/About";
import Alart from "./component/Alart";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    showAlert("this is anable Alert");
  };
  return (
    <>
      <Navbar title="TextUtil" />
      <Alart alert={alert} />
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyse" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
