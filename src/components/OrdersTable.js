import React, { useState, useEffect } from 'react'

import { SelectDate } from '../components/components-provider/components-provider'

import { lazyLoader } from '../functions/handlers'

const OrdersTable = ({ orders }) => {

    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")

    useEffect(() => {
        setDates([...new Set(orders.map( order => order.order.date))])
    }, [orders])

    lazyLoader()

    return (
        <>
            <div className={`${orders.length === 0 && "none"}`}>
                <h1>Orders</h1>
                <SelectDate dates={dates} date={date} setDate={setDate} />
            </div>

            {orders.length ? orders
                .filter((item) => item.order.date.includes(date))
                .map((order, index) => {
                    return (
                        <>
                            <table key={index} className="table mb-5">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.order.cartItems.map((item) => {
                                        return (<tr>
                                            <td>
                                                <img className="product-img" data-src={item.image} alt={item.name} width="80" />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>$ {item.price}</td>
                                        </tr>)
                                    })}
                                </tbody>
                            </table>

                        </>
                    )
                }) : <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_oqpbtola.json" background="transparent" speed="1" style={{ width: "400px", height: "400px" }} loop autoplay></lottie-player>}

        </>
    )
}

export default OrdersTable