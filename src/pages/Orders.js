import React, { useState, useEffect } from 'react'

import { Layout, Loader, OrdersTable } from '../components/components-provider/components-provider'

// import { collection, getDocs, getDoc, doc } from "firebase/firestore";
// import DB from '../firebase';

import { getOrders } from './pages-provider/pages-functions'

const Orders = () => {

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    // const getOrders = async () => {
    //     setLoading(true)
    //     try {
    //         const ordersFromFB = await getDocs(collection(DB, 'orders'))
    //         let ordersContainer = []
    //         ordersFromFB.forEach(doc => {
    //             const orderWithID = {
    //                 id: doc.id,
    //                 ...doc.data()
    //             }
    //             ordersContainer.push(orderWithID)
    //         })
    //         setLoading(false)
    //         console.log("ORDERS", orders)
    //         return setOrders(ordersContainer)

    //     } catch (error) {
    //         setLoading(false)
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        getOrders(setOrders, setLoading)
    }, [])

    return (
        <Layout>
            {loading && <Loader />}
            <div className={`container text-left ${orders.length < 4 && 'vh-80'}`}>
                <OrdersTable orders={orders} />
            </div>
        </Layout>
    )
}

export default Orders