import React, { useState, useEffect } from 'react'

import { SelectDate, OrderProduct } from '../components-provider/components-provider'

import { lazyLoader, currencyFormat, extractTotal } from '../../functions/handlers'

const OrdersTable = ({ orders }) => {

    const [dates, setDates] = useState([])
    const [date, setDate] = useState("")
    let [totals, setTotals] = useState([])

    useEffect(() => {
        setDates([...new Set(orders.map(order => order.order.date))])
    }, [orders])

    useEffect(() => {
        extractTotal(orders, setTotals)
    }, [orders])

    lazyLoader()

    return (
        <>

            {orders.length ? <div className="page-top mb-5">
                <h1>Orders</h1>
                <SelectDate dates={dates} date={date} setDate={setDate} />
            </div> : null}

            {orders.length ?
                orders
                    .filter((order) => order.order.date.includes(date))
                    .map((order, index) => {
                        return (
                            <>
                                <div key={order.order.email} className="orders-border mb-5">
                                    <div>
                                        {order.order.cartItems.map((item) => {
                                            return (<OrderProduct item={item} />)
                                        })}
                                    </div>

                                    <div className="p-4">
                                        <div className="d-flex align-items-center">
                                            <span className="total-amount">Total</span>
                                            <span className="total">{currencyFormat(totals[index])}</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }) : <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_oqpbtola.json" background="transparent" speed="1" style={{ width: "400px", height: "400px" }} loop autoplay></lottie-player>}

        </>
    )
}

export default OrdersTable