// Redux
import { useDispatch } from 'react-redux'

// functions
import { addToCart } from '../functions/redux-functions'

const SingleProduct = ({ product }) => {

    const dispatch = useDispatch()

    return (
        <>
            <h1 className="product-name">{product.name}</h1>
            <div className="d-flex justify-content-center mt-5">
                <div className="product-image-container w-50">
                    <img className="product-info-image my-4" src={product.image} alt={product.name} />
                </div>
                <div className="w-50 d-flex align-items-center justify-content-center flex-column">
                    <p className="product-price">$ {product.price}</p>
                    <h6 className="product-category">{product.category}</h6>
                </div>
            </div>
            <div className="description mt-5">
                <p>{product.description}</p>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <button onClick={() => addToCart(product, dispatch)} className="d-flex justify-content-end mt-3 myBtn">
                    Add To Cart
                </button>
            </div>
        </>
    )
}

export default SingleProduct