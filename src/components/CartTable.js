// React stuff
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FaTrash } from 'react-icons/fa'
import { Modal } from 'react-bootstrap'

// components
import { ModalForm, Loader } from '../components/components-provider/components-provider'

// functions
import { deleteFromCart } from '../pages/pages-provider/pages-functions'

// firebase
import { addDoc, collection } from 'firebase/firestore'
import DB from '../firebase'

const CartTable = ({ cartItems }) => {

    const dispatch = useDispatch()

    const [total, setTotal] = useState(0)
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [pin, setPin] = useState("")
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

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    // place the order
    const placeOrder = async () => {
        setLoading(true)
        const info = {
            name,
            address,
            pin,
            phone
        }
        const order = {
            id: JSON.parse(localStorage.getItem("currentUser")).user.uid,
            cartItems,
            info,
            email: JSON.parse(localStorage.getItem("currentUser")).user.email,
        }

        try {
            const result = await addDoc(collection(DB, "orders"), { order: order })
            toast.success("Order placed successfully!")
            closeModal()
            setLoading(false)
        } catch (error) {
            console.log(error)
            toast.error("Order not placed!")
            setLoading(false)
        }
        clearCart()
    }

    return (
        <>
            {loading && <Loader />}
            {/* <div> */}
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
                            <button onClick={showModal}>
                                Place Order
                            </button>
                        </div>
                    </> : <h1>{cartItems.length} Items in the cart</h1>}

                <Modal show={show} onHide={closeModal}>
                    <Modal.Body>
                        <ModalForm
                            name={name}
                            address={address}
                            phone={phone}
                            pin={pin}
                            setName={setName}
                            setAddress={setAddress}
                            setPhone={setPhone}
                            setPin={setPin}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={closeModal}>
                            Close
                        </button>
                        <button variant="primary" onClick={placeOrder}>
                            Place Order
                        </button>
                    </Modal.Footer>
                </Modal>
            {/* </div> */}
        </>
    )
}

export default CartTable