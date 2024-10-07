import React from "react";

const Persion3 = ({ name, age, panCard }) => {
  //   if (age > 18) {
  //     console.log("You can Drive");
  //   } else {
  //     console.log("You can not Drive");
  //   }

  //   age > 18 ? console.log("You can Drive") : console.log("You can not Drive");

  return (
    <div>
      <h1>Name={name}</h1>
      <h2>{age > 18 ? <h3>You can drive</h3> : <h3>you can not drive</h3>}</h2>
      <h1>{panCard ? <h3>you can apply</h3> : ""}</h1>
      <h2>{panCard && <p>you ready</p>}</h2>
    </div>
  );
};

export default Persion3;
