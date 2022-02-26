import React from 'react'
import { Modal } from 'react-bootstrap'

import { AddForm } from '../components/components-provider/components-provider'

const AddModal = (props) => {
    return (
        <Modal show={props.addModal} onHide={props.closeAddModal}>
            <Modal.Body>
                <AddForm newProduct={props.newProduct} setNewProduct={props.setNewProduct} />
            </Modal.Body>
            <Modal.Footer>
                <button className="myBtn" variant="secondary" onClick={props.closeAddModal}>
                    Close
                </button>
                <button className="myBtn" variant="primary" onClick={() => props.addNewProductToDB(props.newProduct, props.closeAddModal, props.setLoading)}>
                    Add
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddModal