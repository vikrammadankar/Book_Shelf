// React stuff
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'


// components
import { Loader, OrderModal, CartFooter, CartProduct } from '../components-provider/components-provider'

// functions
import { clearCart, deleteFromCart } from '../../functions/redux-functions'
import { placeOrder } from '../../functions/firebase-functions'


const CartTable = ({ cartItems }) => {

    const dispatch = useDispatch()

    const [total, setTotal] = useState(0)
    const [info, setInfo] = useState({
        name: "",
        address: "",
        phone: "",
        pin: ""
    })
    const [loading, setLoading] = useState(false)

    // modal close/open
    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);


    // calc the total
    useEffect(() => {
        let tempTotal = 0
        cartItems.forEach(cartItem => {
            tempTotal += cartItem.price
        })
        setTotal(tempTotal)
    }, [cartItems])

    return (
        <>
            {loading && <Loader />}

            <h1 className={`mb-5 ${cartItems.length === 0 && "none"}`} >Cart</h1>

            {cartItems.length > 0 ? <>
                <div className={`row ${cartItems.length === 0 && "vh-100"}`}>
                    {cartItems.map(cartItem => <CartProduct cartItem={cartItem} deleteFromCart={deleteFromCart} dispatch={dispatch} />)}
                </div>

                <CartFooter total={total} showModal={showModal} />

            </> : <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_zuYFad.json" background="transparent" speed="1" style={{ width: "400px", height: "400px" }} loop autoplay></lottie-player>}

            <OrderModal
                show={show}
                closeModal={closeModal}
                info={info}
                setInfo={setInfo}
                placeOrder={placeOrder}
                cartItems={cartItems}
                setLoading={setLoading}
                clearCart={clearCart}
                dispatch={dispatch}
            />
        </>
    )
}

export default CartTable