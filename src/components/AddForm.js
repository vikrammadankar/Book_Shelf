import React from 'react'

const AddForm = ({ newProduct, setNewProduct }) => {
    return (
        <div className="form">
            <h2>Add New Product</h2>
            <hr />
            <input type="text" className="form-control" placeholder="Enter Product Name..." value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />

            <input type="number" className="form-control" placeholder="Enter Price..." value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />

            <input type="text" className="form-control" placeholder="Enter Image Url..." value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />

            <input type="text" className="form-control" placeholder="Enter Category..." value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
        </div>
    )
}

export default AddForm