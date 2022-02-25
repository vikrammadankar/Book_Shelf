import React from 'react'

const EditForm = ({ productToEdit, setProductToEdit }) => {
    return (
        <div className="form">
            <h2>Edit Your Product</h2>
            <hr />
            <input type="text" className="form-control" placeholder="Edit Name..." value={productToEdit.name} onChange={(e) => setProductToEdit({ ...productToEdit, name: e.target.value })} />

            <input type="text" className="form-control" placeholder="Edit Address..." value={productToEdit.price} onChange={(e) => setProductToEdit({ ...productToEdit, price: e.target.value })} />

            <textarea className="form-control" placeholder="Edit Description..." value={productToEdit.description} onChange={(e) => setProductToEdit({ ...productToEdit, description: e.target.value })} />

            <input type="text" className="form-control" placeholder="Edit Phone..." value={productToEdit.image} onChange={(e) => setProductToEdit({ ...productToEdit, image: e.target.value })} />

            <input type="text" className="form-control" placeholder="Edit Pin..." value={productToEdit.category} onChange={(e) => setProductToEdit({ ...productToEdit, category: e.target.value })} />
        </div>
    )
}

export default EditForm