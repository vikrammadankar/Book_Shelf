import { editProductFromDB, addNewProductToDB } from '../../functions/firebase-functions'

import { EditModal, AddModal } from '../components-provider/components-provider'

import { currencyFormat } from '../../functions/handlers'

import { FaTrash, FaEdit } from 'react-icons/fa'


const AllAdminProductsTable = (props) => {
    return (
        <>
            <div className="page-top mb-5">
                <h1>List of Products</h1>
                <button className="myBtn" onClick={props.showAddModal}>Add Product</button>
            </div>
            <div>
                <div className="all-products-container">
                    {props.adminProducts.map((item, index) => {
                        return (<div className="mb-5 d-flex aling-items-center flex-column admin-product" key={index}>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="product-info-col">
                                    <img className="product-img" data-src={item.image} alt={item.name} width="30" />
                                    <h5>{item.name}</h5>
                                    <div>{currencyFormat(item.price)}</div>
                                </div>
                            </div>
                            <div className="all-products-actions d-flex gap-3">
                                <div className="edit-icon myBadge" onClick={() => props.editProduct(item, props.setProductToEdit, props.setShow)}>
                                    <FaEdit size={20} />
                                </div>
                                <div className="delete-icon myBadge" onClick={() => props.deleteProductFromDB(item, props.setLoading, props.setAdminProducts)}>
                                    <FaTrash size={20} />
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
            {/* <table className="table table-striped mb-5">
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
                                <img className="product-img" data-src={item.image} alt={item.name} width="30" />
                            </td>
                            <td >{item.name}</td>
                            <td >{currencyFormat(item.price)}</td>
                            <td className="delete-icon" onClick={() => props.deleteProductFromDB(item, props.setLoading, props.setAdminProducts)}>
                                <FaTrash size={20} />
                            </td>
                            <td className="edit-icon" onClick={() => props.editProduct(item, props.setProductToEdit, props.setShow)}>
                                <FaEdit size={20} />
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table> */}
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