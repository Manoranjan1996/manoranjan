import { useState } from "react";
import React from "react";
import MoneyContact from "./MoneyContact";

const MoneyState = (props) => {
  const money = 2200;
  const doller = 10;
  const [counter, setCounter] = useState(0);
  const name = "manoj";
  return (
    <MoneyContact.Provider value={{ name, doller, money, counter, setCounter }}>
      {props.children}
    </MoneyContact.Provider>
  );
};

export default MoneyState;
