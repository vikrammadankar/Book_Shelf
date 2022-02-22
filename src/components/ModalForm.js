import React from 'react'

const ModalForm = (props) => {
    return (
        <div className="form">
            <h2>Place Your Order</h2>
            <hr />
            <input type="text" className="form-control" placeholder="Enter Name..." value={props.name} onChange={(e) => props.setName(e.target.value)} />

            <input type="text" className="form-control" placeholder="Enter Address..." value={props.address} onChange={(e) => props.setAddress(e.target.value)} />

            <input type="number" className="form-control" placeholder="Enter Phone..." value={props.phone} onChange={(e) => props.setPhone(e.target.value)} />

            <input type="number" className="form-control" placeholder="Enter Pin..." value={props.pin} onChange={(e) => props.setPin(e.target.value)} />
        </div>
    )
}

export default ModalForm