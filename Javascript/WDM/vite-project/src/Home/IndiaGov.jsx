import React from "react";
import StateGov from "./StateGov";

const IndiaGov = ({ money }) => {
  return (
    <div>
      <h1>This is Indian Gov Component</h1>
      <StateGov money={money} />
    </div>
  );
};

export default IndiaGov;
