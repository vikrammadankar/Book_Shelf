import React from 'react'
import { Modal } from 'react-bootstrap'
import { ModalForm } from '../components/components-provider/components-provider'

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
                <button className="myBtn" variant="primary" onClick={props.placeOrder}>
                    Place Order
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default OrderModal