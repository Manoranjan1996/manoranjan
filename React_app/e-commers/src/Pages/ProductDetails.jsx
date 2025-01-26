import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../Services/ProductService";
import Loader from "../Components/Loader";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/CartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery(["product", id], () =>
    fetchProductById(id)
  );

  if (isLoading) return <Loader />;

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  return (
    <div className="product-details">
      <img src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <p>${data.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
