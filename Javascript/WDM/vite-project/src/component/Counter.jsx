import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const increase = () => {
    // counter++;
    setCounter(counter + 1);
    console.log("counter =", counter);
  };
  const decrease = () => {
    // counter--;
    setCounter(counter - 1);
    console.log("counter =", counter);
  };

  return (
    <div>
      <h1>Counter Table</h1>
      <h1>{counter}</h1>
      <button onClick={increase}>Increase BTM</button>
      <button onClick={decrease}>Decrease BTM</button>
    </div>
  );
};

export default Counter;
