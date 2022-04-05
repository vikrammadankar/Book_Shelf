import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import "../styles/products.css";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCart = (product, dispatch) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const { cartItems } = useSelector((state) => state.cartReducer);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 product-container">
      <div className="m-2 pb-5 text-center product">
        <div className="product-content">
          <h3>{product.title}</h3>
          <img
            className="product-img"
            src={product.thumbnailUrl}
            alt={product.title}
          />
        </div>
        <div className="product-actions">
          <h2>{product.pageCount} RS/-</h2>
          <div className="d-flex">
            <button
              onClick={() => addToCart(product, dispatch)}
              className="mx-2"
            >
              Add To Cart
            </button>
            <button
              onClick={() => navigate(`/productinfo/${product.id}`)}
              className="mx-2"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
