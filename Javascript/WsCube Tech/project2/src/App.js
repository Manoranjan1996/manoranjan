import logo from "./logo.svg";
import "./App.css";
import Button from "./Btm.css";
import { useState } from "react";

function App() {
  let [pstatus, setPstatus] = useState(false);
  let [menuStatus, setMenuStatus] = useState(false);

  return (
    <div className="App">
      <button className="micon" onClick={() => setMenuStatus(!menuStatus)}>
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${menuStatus ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallary</li>
          <li>Contact</li>
        </ul>
      </div>

      <input type={pstatus ? "text" : "password"} />
      <button onClick={() => setPstatus(!pstatus)}>
        {pstatus ? "Hide" : "Show"}
      </button>
      <br />
      <button className={Button.error}>Error</button>
      <button className={Button.radhy}>Ready</button>
      <button className={Button.ram}>Radhy Radhy</button>
      <h1>Wellcome to WS</h1>
    </div>
  );
}

export default App;
