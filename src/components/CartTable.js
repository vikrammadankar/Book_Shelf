// React stuff
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FaTrash } from 'react-icons/fa'

// components
import { Loader, OrderModal } from '../components/components-provider/components-provider'

// functions
import { clearCart, deleteFromCart } from '../functions/redux-functions'

// firebase
import { addDoc, collection } from 'firebase/firestore'
import DB from '../firebase'


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
            <h1 className={`${cartItems.length === 0 && "none"}`} >Cart</h1>
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
                                        <FaTrash size={20} onClick={() => deleteFromCart(cartItem, dispatch)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-end">
                        <h2 className="total-amount">Total: ${total.toFixed(2)}</h2>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
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