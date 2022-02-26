import { editProductFromDB, addNewProductToDB } from '../../functions/firebase-functions'

import { EditModal, AddModal } from '../components-provider/components-provider'

import { FaTrash, FaEdit } from 'react-icons/fa'


const AllAdminProductsTable = (props) => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h1>List of Products</h1>
                <button className="myBtn" onClick={props.showAddModal}>Add Product</button>
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
                    {props.adminProducts.map((item, index) => {
                        return (<tr className="mb-3" key={index}>
                            <td>
                                <img className="product-img" data-src={item.image} alt={item.name} width="80" />
                            </td>
                            <td >{item.name}</td>
                            <td >$ {item.price}</td>
                            <td className="delete-icon" onClick={() => props.deleteProductFromDB(item, props.setLoading, props.setAdminProducts)}>
                                <FaTrash size={20} />
                            </td>
                            <td className="edit-icon" onClick={() => props.editProduct(item, props.setProductToEdit, props.showModal)}>
                                <FaEdit size={20} />
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <EditModal
                show={props.show}
                closeModal={props.closeModal}
                productToEdit={props.productToEdit}
                setProductToEdit={props.setProductToEdit}
                editProductFromDB={editProductFromDB}
                setLoading={props.setLoading}
                setAdminProducts={props.setAdminProducts}
            />
            <AddModal
                newProduct={props.newProduct}
                setNewProduct={props.setNewProduct}
                addModal={props.addModal}
                closeAddModal={props.closeAddModal}
                addNewProductToDB={addNewProductToDB}
                setLoading={props.setLoading}
                setAdminProducts={props.setAdminProducts}
            />
        </>
    )
}

export default AllAdminProductsTable