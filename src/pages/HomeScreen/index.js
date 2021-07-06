import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomeScreen.scss";
import ProductCard from "../../components/ProductCard";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        "https://asm-dev-api.herokuapp.com/api/v1/food"
      );
      setProducts(data.data.meals);
    };
    fetchProducts();
  }, []);
  return (
    <div className="container">
      <div className="products">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
