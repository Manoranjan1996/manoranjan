import React from "react";
import "./laptop.css";

const Laptop = ({ brandName, model, price }) => {
  // const obj = {
  //   backgroundColor: "blue",
  //   padding: "10px",
  //   color: "white",
  //   margin: "20px",
  //   borderRadius: "10px",
  //   border: "2px solid red",
  // };
  return (
    <div
      // style={{
      // backgroundColor: "gray",
      // padding: "10px",
      // color: "white",
      // margin: "20px",
      // borderRadius: "10px",
      // border: "2px solid red",
      // }}
      // style={obj}
      className="div"
    >
      <h3>Brand Name= {brandName} </h3>
      <h3>Model= {model} </h3>
      <h3>Price= {price} </h3>
    </div>
  );
};

export default Laptop;
