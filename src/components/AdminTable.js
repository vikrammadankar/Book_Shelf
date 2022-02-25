import { useState } from 'react'

import { FaTrash, FaEdit } from 'react-icons/fa'

import { deleteProductFromDB, editProductFromDB } from '../functions/firebase-functions'

import { EditModal } from '../components/components-provider/components-provider'

import { editProduct } from '../functions/handlers'

const AdminTable = ({ adminProducts, setLoading, setAdminProducts }) => {

    // modal close/open
    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);

    const [productToEdit, setProductToEdit] = useState({
        name: "",
        price: 0,
        image: "",
        category: ""
    })

    return (
        <>
            <table className="table mb-5">
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
                        return (<tr key={index}>
                            <td>
                                <img className="product-img" data-src={item.image} alt={item.name} width="80" />
                            </td>
                            <td>{item.name}</td>
                            <td>$ {item.price}</td>
                            <td className="delete-icon">
                                <FaTrash size={20} />
                            </td>
                            <td className="edit-icon" onClick={() => editProduct(item, {setProductToEdit, showModal})}>
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
        </>
    )
}

export default AdminTable