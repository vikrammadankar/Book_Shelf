import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from './components-provider/components-functions'

const SingleProduct = ({ product }) => {

    const dispatch = useDispatch()

    return (
        <>
            <h3>{product.name}</h3>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <img className="product-info-image my-4" src={product.image} alt={product.name} />
                    <p>{product.description}</p>
                    <p>$ {product.price.toFixed(2)}</p>
                    <div className="d-flex justify-content-center">
                        <button onClick={() => addToCart(product, dispatch)} className="d-flex justify-content-end mt-3">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct