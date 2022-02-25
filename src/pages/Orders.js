import React, { useState, useEffect } from 'react'

import { Layout, Loader, OrdersTable } from '../components/components-provider/components-provider'

import { getOrders } from '../functions/firebase-functions'

const Orders = () => {

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getOrders(setOrders, setLoading)
    }, [])

    return (
        <Layout>
            {loading && <Loader />}
            <div className={`container text-left ${orders.length < 1 && 'different-h'}`}>
                <OrdersTable orders={orders} />
            </div>
        </Layout>
    )
}

export default Orders