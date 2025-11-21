import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../Services/ProductService";
import ProductCard from "../Components/ProductCard";
import Loader from "../Components/Loader";

const Home = () => {
  const { data, isLoading } = useQuery(["products"], fetchProducts);

  if (isLoading) return <Loader />;

  return (
    <div className="home">
      <h1>Welcome to E-Shop</h1>
      <div className="product-grid">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
