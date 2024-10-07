import React from "react";

const ShowProduct = () => {
  let product = [
    { id: 1, titel: "iphone-2", price: 13000 },
    { id: 3, titel: "iphone-3", price: 15000 },
    { id: 13, titel: "iphone-4", price: 16000 },
    { id: 4, titel: "iphone-5", price: 3000 },
  ];
  return (
    <div
      style={{
        backgroundColor: "gray",
        padding: "10px",
        color: "white",
        margin: "20px",
        borderRadius: "10px",
        border: "2px solid red",
      }}
    >
      {product.map((data) => (
        <div key={data.id}>
          <h1> Titel={data.titel}</h1>
          <h1> Price={data.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default ShowProduct;
