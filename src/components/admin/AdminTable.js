import { useState } from 'react'

import { FaTrash, FaEdit } from 'react-icons/fa'

import { deleteProductFromDB, editProductFromDB, addNewProductToDB } from '../functions/firebase-functions'

import { EditModal, AddModal } from '../components/components-provider/components-provider'

import { editProduct } from '../functions/handlers'

const AdminTable = ({ adminProducts, setLoading, setAdminProducts }) => {

    // modal close/open
    const [show, setShow] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: 0,
        image: "",
        description: "",
        category: ""
    })
    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);
    const showAddModal = () => setAddModal(true)
    const closeAddModal = () => {
        setAddModal(false)
        setNewProduct({ name: "", price: 0, image: "", description: "", category: "" })
    }

    const [productToEdit, setProductToEdit] = useState({
        name: "",
        price: 0,
        image: "",
        description: "",
        category: ""
    })

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>List of Products</h1>
                <button className="myBtn" onClick={showAddModal}>Add Product</button>
            </div>
            <table className="table table-striped mb-5">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {adminProducts.map((item, index) => {
                        return (<tr className="mb-3" key={index}>
                            <td>
                                <img className="product-img" data-src={item.image} alt={item.name} width="80" />
                            </td>
                            <td >{item.name}</td>
                            <td >$ {item.price}</td>
                            <td className="delete-icon" onClick={() => deleteProductFromDB(item, setLoading, setAdminProducts)}>
                                <FaTrash size={20} />
                            </td>
                            <td className="edit-icon" onClick={() => editProduct(item, { setProductToEdit, showModal })}>
                                <FaEdit size={20} />
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <EditModal
                show={show}
                closeModal={closeModal}
                productToEdit={productToEdit}
                setProductToEdit={setProductToEdit}
                editProductFromDB={editProductFromDB}
                setLoading={setLoading}
                setAdminProducts={setAdminProducts}
            />
            <AddModal
                newProduct={newProduct}
                setNewProduct={setNewProduct}
                addModal={addModal}
                closeAddModal={closeAddModal}
                addNewProductToDB={addNewProductToDB}
                setLoading={setLoading}
                setAdminProducts={setAdminProducts}
            />
        </>
    )
}

export default AdminTable