import React from "react";

const FilterProduct = () => {
  let products = [
    { id: 1, titel: "iphone-2", price: 13000 },
    { id: 3, titel: "iphone-3", price: 15000 },
    { id: 13, titel: "iphone-4", price: 16000 },
    { id: 4, titel: "iphone-5", price: 3000 },
  ];
  const filterData = products.filter((data) => data.category == "mobile");

  return <div>{filterData.map}</div>;
};

export default FilterProduct;
