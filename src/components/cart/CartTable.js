// React stuff
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FaTrash } from 'react-icons/fa'

// components
import { Loader, OrderModal } from '../components-provider/components-provider'

// functions
import { clearCart, deleteFromCart } from '../../functions/redux-functions'

// firebase
import { addDoc, collection } from 'firebase/firestore'
import { DB } from '../../firebase'


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


    // place the order
    const placeOrder = async () => {
        setLoading(true)

        const order = {
            id: JSON.parse(localStorage.getItem("currentUser")).user.uid,
            cartItems,
            info,
            date: new Date().toLocaleDateString('en-EN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }),
            email: JSON.parse(localStorage.getItem("currentUser")).user.email,
        }

        try {
            await addDoc(collection(DB, "orders"), { order })
            toast.success("Order placed successfully!")
            closeModal()
            setLoading(false)
        } catch (error) {
            console.log(error)
            toast.error("Order not placed!")
            setLoading(false)
        }
        clearCart(dispatch)
    }

    return (
        <>
            {loading && <Loader />}
            <h1 className={`mb-5 ${cartItems.length === 0 && "none"}`} >Cart</h1>
            {cartItems.length > 0 ? <>
                <div className={`row ${cartItems.length === 0 && "vh-100"}`}>
                    {cartItems.map(cartItem => <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 product-container">
                        <div className="m-2 text-center cart-product p-4">
                            <div className="product-content">
                                <h3>{cartItem.name}</h3>
                                <img className="product-img mt-2" src={cartItem.image} alt={cartItem.name} />
                            </div>
                            <div className="product-actions delete-icon">
                                <FaTrash size={20} onClick={() => deleteFromCart(cartItem, dispatch)} />
                            </div>
                            <h2 className="mt-2">$ {cartItem.price}</h2>
                        </div>
                    </div>)}
                </div>
                <div className="d-flex justify-content-between my-5">
                    <h2 className="total-amount">Total: ${total}</h2>
                    <button className="myBtn" onClick={showModal}>
                        Place Order
                    </button>
                </div>
            </> : <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_zuYFad.json" background="transparent" speed="1" style={{ width: "400px", height: "400px" }} loop autoplay></lottie-player>}

            <OrderModal
                show={show}
                closeModal={closeModal}
                info={info}
                setInfo={setInfo}
                placeOrder={placeOrder}
            />
        </>
    )
}

export default CartTable