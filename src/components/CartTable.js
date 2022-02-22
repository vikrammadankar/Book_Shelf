import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FaTrash } from 'react-icons/fa'

import { deleteFromCart } from '../pages/pages-provider/pages-functions'

const CartTable = ({ cartItems }) => {
    const dispatch = useDispatch()
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let tempTotal = 0
        cartItems.forEach(cartItem => {
            tempTotal += cartItem.price
        })
        setTotal(tempTotal)
    }, [cartItems])

    return (
        <div>
            {cartItems.length > 0 ?
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(cartItem => (
                                <tr key={cartItem.id} >
                                    <td>
                                        <img src={cartItem.image} alt={cartItem.name} width="80" />
                                    </td>
                                    <td>
                                        {cartItem.name}
                                    </td>
                                    <td>
                                        $ {cartItem.price}
                                    </td>
                                    <td className="delete-icon">
                                        <FaTrash onClick={() => deleteFromCart(cartItem, dispatch)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-end">
                        <h2 className="total-amount">Total: ${total.toFixed(2)}</h2>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <button>
                            Place Order
                        </button>
                    </div>
                </> : <h1>{cartItems.length} Items in the cart</h1>}
        </div>
    )
}

export default CartTable