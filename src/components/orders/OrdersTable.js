import React, { useState, useEffect } from 'react'

import { SelectDate } from '../components-provider/components-provider'

import { lazyLoader } from '../../functions/handlers'

const OrdersTable = ({ orders }) => {

    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")

    useEffect(() => {
        setDates([...new Set(orders.map(order => order.order.date))])
    }, [orders])

    lazyLoader()


    return (
        <>

            {orders.length ? <div className="d-flex justify-content-between align-items-center mb-5">
                <h1>Orders</h1>
                <SelectDate dates={dates} date={date} setDate={setDate} />
            </div> : null}

            {orders.length ?
                orders
                    .filter((order) => order.order.date.includes(date))
                    .map((order, index) => {
                        return (
                            <>
                                <table key={order.order.email} className="table mb-5 border-bottom bg-light">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.order.cartItems.map((item) => {
                                            return (<tr key={item.uid}>
                                                <td>
                                                    <img className="product-img" data-src={item.image} alt={item.name} width="80" />
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(item.price)}</td>
                                            </tr>)
                                        })}
                                    </tbody>

                                    <tfoot>
                                        <tr>
                                            <td>Total: {order.order.cartItems.reduce((tot, item) => parseInt(new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(item.price)) + tot, 0)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </>
                        )
                    }) : <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_oqpbtola.json" background="transparent" speed="1" style={{ width: "400px", height: "400px" }} loop autoplay></lottie-player>}

        </>
    )
}

export default OrdersTable