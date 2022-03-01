import React from 'react'
import { currencyFormat } from '../../functions/handlers'

const CartFooter = ({ total, showModal }) => {

    return (
        <div className="cart-footer my-5">
            <div className="d-flex align-items-center">
                <span className="total-amount">Total</span>
                <span className="total">{currencyFormat(total)}</span>
            </div>
            <button className="myBtn" onClick={showModal}>
                Place Order
            </button>
        </div>
    )
}

export default CartFooter