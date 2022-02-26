import React from 'react'
import { Modal } from 'react-bootstrap'
import { ModalForm } from '../components-provider/components-provider'

const OrderModal = (props) => {

    return (
        <Modal show={props.show} onHide={props.closeModal}>
            <Modal.Body>
                <ModalForm
                    info={props.info}
                    setInfo={props.setInfo}
                />
            </Modal.Body>
            <Modal.Footer>
                <button className="myBtn" variant="secondary" onClick={props.closeModal}>
                    Close
                </button>
                <button className="myBtn" variant="primary" onClick={() => props.placeOrder(
                    props.cartItems, props.info, props.setLoading, props.clearCart, props.closeModal, props.dispatch
                )}>
                    Place Order
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default OrderModal