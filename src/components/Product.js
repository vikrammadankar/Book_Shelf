// React, Redux & Router-Dom
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// functions
import { addToCart } from './components-provider/components-functions'

const Product = ({ product }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { cartItems } = useSelector(state => state.cartReducer)

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 product-container">
            <div className="m-2 pb-5 text-center product">
                <div className="product-content">
                    <h3>{product.name}</h3>
                    <img className="product-img" src={product.image} alt={product.name} />
                </div>
                <div className="product-actions">
                    <h2>$ {product.price.toFixed(2)}</h2>
                    <div className="d-flex">
                        <button onClick={() => addToCart(product, dispatch)} className="mx-2">Add To Cart</button>
                        <button onClick={() => navigate(`/productinfo/${product.id}`)} className="mx-2">View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product