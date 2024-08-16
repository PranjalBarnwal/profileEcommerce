import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ShimmerCard from "./ShimmerCard";
import { products } from "../assets/products";

const ProductList = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function getRandomNumber() {
      return Math.floor(Math.random() * 1501);
    }
    const time=getRandomNumber();
    const timer = setTimeout(() => {
      setLoading(false);
    }, time);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductList;
