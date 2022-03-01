import React, { useState, useEffect } from 'react'
import { SelectDate, OrderProduct } from '../components-provider/components-provider'
import { extractTotal, currencyFormat } from '../../functions/handlers'

const AllOrdersTable = (props) => {
    let [totals, setTotals] = useState([])

    useEffect(() => {
        extractTotal(props.orders, setTotals)
    }, [props.orders])

    return (
        <>

            {props.orders.length ? <div className="page-top mb-5">
                <h1>Orders</h1>
                <SelectDate dates={props.dates} date={props.date} setDate={props.setDate} />
            </div> : null}

            {props.orders.length ?
                props.orders
                    .filter((order) => order.order.date.includes(props.date))
                    .sort((orderA, orderB) => orderA.order.date < orderB.order.date)
                    .map((order, index) => {
                        return (
                            <>
                                <div className="d-flex align-items-center justify-content-start gap-4">
                                    <h3>{order.order.info.name}</h3>
                                    <small className="badge bg-warning">{order.order.date}</small>
                                </div>
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

export default AllOrdersTable