import React from "react";

const Product = ({ titel, brand, price }) => {
  return (
    <div>
      <h2>mobile={titel}</h2>
      <h3>mobile Brand={brand}</h3>
      <h4>mobile price={price}</h4>
    </div>
  );
};

export default Product;
