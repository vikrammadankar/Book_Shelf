// React & Redux
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

// components
import { Layout, CartTable } from '../components/components-provider/components-provider'

const Cart = () => {

    const { cartItems } = useSelector(state => state.cartReducer)

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <Layout>
            <div className={`container text-center ${cartItems.length < 4 && 'vh-80'}`}>
                <CartTable cartItems={cartItems} />
            </div>
        </Layout>
    )
}

export default Cart