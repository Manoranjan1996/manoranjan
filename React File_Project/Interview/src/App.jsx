import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  console.log("App rendered", Math.random());

  const [value, setValue] = useState(1);
  // const [multipliValue, setMultipliValue] = useState(1);
  // let multipliValue = value * 9; //option
  // const multiplybyfive = () => {
  // setMultipliValue(value * 5);
  //   setValue(value + 1);
  // };
  const Clickme = () => {
    setValue(3);
  };

  return (
    <>
      <h1>Main value:{value}</h1>
      <button onClick={Clickme}>Click to Multiply by 5</button>
      <h3>Multiply value:</h3>
    </>
  );
}

export default App;
