import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <>
     {/*  <h3>Product info</h3>
      {product && <h2>{product.title}</h2>} */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <img
            className="product-info-image my-4"
            src={product.thumbnailUrl}
            alt={product.title}
          />
          <p className="fw-bold">Published on : {product.publishdate}</p>
          <p className="fw-bold">Price : {product.pageCount} RS/-</p>
          <p><b>Description</b> : {product.shortDescription}</p>
          <div className="d-flex justify-content-center">
            <button className="d-flex justify-content-end mt-1">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
