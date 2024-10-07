import { useState } from "react";
import "./App.css";
import Header from "./Header";
import photo from "./picture/images.png";

function App() {
  let tamplate = "";
  let [count, setCount] = useState(1);
  let [pshow, setPshow] = useState(false);

  if (pshow) {
    tamplate = (
      <>
        <button>Hide</button>
        <p>Welcome to WS</p>;
      </>
    );
  } else {
    tamplate = <button onClick={() => setPshow(!pshow)}>Show</button>;
  }

  let displayData = () => {
    setCount(count + 1);
  };
  let addData = (a, b) => {
    console.log(a + b);
  };

  return (
    <div className="App">
      {tamplate}
      <div>{count}</div>
      <button
        className="bg-[red] p-[10px] mr-4"
        onClick={() => addData(20, 21)}
      ></button>
      <button className="bg-[red] p-[10px]" onClick={displayData}>
        {" "}
        Save
      </button>
      <img width={200} src={photo} />
      <Header />
      <h1 className>Welcome Tailwinds</h1>
    </div>
  );
}

export default App;
