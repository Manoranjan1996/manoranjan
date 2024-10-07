import React from "react";
import Superman from "./Superman";

const Persion = () => {
  const name = "samtoshi maa";
  const age = 28;
  const persion = {
    name: "manoj",
    age: 12,
    gmail: "mjena99h@gmail",
    pin: 756023,
  };
  const product = {
    titel: "iPhone",
  };
  return (
    <>
      <div>
        <h1>Name={product.titel}</h1>
        <h1>age={persion.age}</h1>
        <Superman />
        <h1>gmail={persion.gmail}</h1>
        <h1>pin={persion.pin}</h1>
      </div>
      <div>
        <h3></h3>
      </div>
    </>
  );
};

export default Persion;
