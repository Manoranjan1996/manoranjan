import React from "react";
import Peolple from "./Peolple";

const Panchayat = ({ money }) => {
  return (
    <div>
      <h1>This is the Panchayat Component</h1>
      <Peolple money={money} />
    </div>
  );
};

export default Panchayat;
