import React from 'react'
import {SelectDate} from '../components-provider/components-provider'

const allOrdersTable = (props) => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h1>List of Orders</h1>
                <SelectDate dates={props.dates} date={props.date} setDate={props.setDate} />
            </div>
            {props.orders
                .filter(order => order.order.date.includes(props.date))
                .map((order, index) => (
                    <table key={index} className="table mb-5 table-striped">
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
                                <td>Total: $ {order.order.cartItems.reduce((tot, item) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(item.price) + tot, 0)}</td>
                            </tr>
                        </tfoot>
                    </table>
                ))}
        </>
    )
}

export default allOrdersTable