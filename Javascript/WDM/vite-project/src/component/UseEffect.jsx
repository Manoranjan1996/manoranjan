import React from "react";
import { useState, useEffect } from "react";

const UseEffect = () => {
  const [counte, setCounte] = useState(10);
  useEffect(() => {
    document.title = counte;
    console.log("useEffect is ready");
  }, [counte]);
  return (
    <div>
      <h1>Learning Using UseEffect</h1>

      <h1> {counte} </h1>
      <button onClick={() => setCounte(counte + 1)}>Increase</button>
      <button onClick={() => setCounte(counte - 1)}>Decrease</button>
    </div>
  );
};

export default UseEffect;
