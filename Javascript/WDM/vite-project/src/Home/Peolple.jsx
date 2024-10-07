import React, { useContext } from "react";
import MoneyContact from "../context/MoneyContact";

const Peolple = () => {
  // console.log(useContext(MoneyContact));
  const data = useContext(MoneyContact);

  return (
    <div>
      <h1>This is the People Component </h1>
      <h2>Money={data.money}</h2>
    </div>
  );
};

export default Peolple;
