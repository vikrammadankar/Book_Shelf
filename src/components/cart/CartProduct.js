import React from 'react'
import { FaTrash } from 'react-icons/fa'

const CartProduct = ({cartItem, deleteFromCart, dispatch}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 product-container">
            <div className="text-center cart-product p-4">
                <div className="product-content">
                    <h3>{cartItem.name}</h3>
                    <img className="product-img mt-2" src={cartItem.image} alt={cartItem.name} />
                </div>
                <div className="product-actions delete-icon">
                    <FaTrash size={20} onClick={() => deleteFromCart(cartItem, dispatch)} />
                </div>
                <h2 className="mt-2">{new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(cartItem.price)}</h2>
            </div>
        </div>
    )
}

export default CartProduct