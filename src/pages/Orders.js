import React, { useState, useEffect } from 'react'

import { Layout, Loader, OrdersTable } from '../components/components-provider/components-provider'

import { getOrders } from '../functions/firebase-functions'

const Orders = () => {

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    const userID = JSON.parse(localStorage.getItem("currentUser")).user.uid

    useEffect(() => {
        getOrders(setOrders, setLoading, userID)
    }, [userID])

    return (
        <Layout>
            {loading && <Loader />}
            <div className={`container ${orders.length < 1 && 'different-h'}`}>
                <OrdersTable orders={orders} />
            </div>
        </Layout>
    )
}

export default Orders