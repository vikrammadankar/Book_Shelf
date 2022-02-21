import React from 'react'

const SingleProduct = ({ product }) => {
    return (
        <>
            <h3>{product.name}</h3>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <img className="product-info-image my-4" src={product.image} alt={product.name} />
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <div className="d-flex justify-content-center">
                        <button className="d-flex justify-content-end mt-3">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct