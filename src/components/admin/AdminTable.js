import { useState, useEffect } from 'react'

import { deleteProductFromDB } from '../../functions/firebase-functions'

import { AllOrdersTable, AllAdminProductsTable } from '../components-provider/components-provider'

import { editProduct, lazyLoader } from '../../functions/handlers'

import { Tabs, Tab } from 'react-bootstrap'

const AdminTable = ({ adminProducts, setLoading, setAdminProducts, orders }) => {

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

    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")

    useEffect(() => {
        setDates([...new Set(orders.map(order => order.order.date))])
    }, [orders])

    lazyLoader()

    return (
        <>
            <Tabs defaultActiveKey="Products" variant="pills" id="uncontrolled-tab-example" className="mb-4">
                <Tab title="Products" eventKey="Products" >
                    <AllAdminProductsTable
                        adminProducts={adminProducts}
                        setAdminProducts={setAdminProducts}
                        showModal={showModal}
                        setLoading={setLoading}
                        deleteProductFromDB={deleteProductFromDB}
                        editProduct={editProduct}
                        show={show}
                        setShow={setShow}
                        productToEdit={productToEdit}
                        setProductToEdit={setProductToEdit}
                        closeModal={closeModal}
                        addModal={addModal}
                        newProduct={newProduct}
                        setNewProduct={setNewProduct}
                        closeAddModal={closeAddModal}
                        showAddModal={showAddModal}
                    />
                </Tab>
                <Tab title="Orders" eventKey="Orders" >
                    <AllOrdersTable
                        dates={dates}
                        date={date}
                        setDate={setDate}
                        orders={orders}
                    />
                </Tab>
            </Tabs>
        </>
    )
}

export default AdminTable