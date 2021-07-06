import React from "react";
import "./ProductCard.scss";
import Ratings from "../Ratings";
import plus from "../../assets/plus.svg";

const ProductCard = ({ product }) => {
  let index = product.description.indexOf(".");
  let para_1 = product.description.slice(0, index);
  let para_2 = product.description.slice(56, 133);
  return (
    <div className="card">
      <div className="image">
        <img src={product.strMealThumb} alt="" />
      </div>
      <div className="p-1">
        <div className="flex py-1">
          <h4>
            <a href="/">{product.strMeal}</a>
          </h4>
          <h4>
            <a href="/">{product.price}</a>
          </h4>
        </div>
        <p>{para_1}</p>
        <br />
        <p>{para_2}...</p>
      </div>
      <div className="flex">
        <Ratings product={product} />
        <div className="addToCart">
          <a href="/">
            <img src={plus} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
