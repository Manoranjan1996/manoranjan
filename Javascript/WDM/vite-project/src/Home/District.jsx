import React from "react";
import Block from "./Block";

const District = ({ money }) => {
  return (
    <div>
      <h1>This is the District Component</h1>
      <Block money={money} />
    </div>
  );
};

export default District;
