import React from 'react'
import $ from "jquery"

const OrdersTable = ({ orders }) => {

    $(document).ready(function () {
        [].forEach.call(document.querySelectorAll('.product-img[data-src]'), function (img) {
            img.setAttribute('src', img.getAttribute('data-src'));
            img.onload = function () {
                img.removeAttribute('data-src');
            };
        });
    });

    return (
        <>
            <h1 className={`${orders.length === 0 && "none"}`} >Orders</h1>

            {orders.map(order => {
                return (
                    <>
                        <h3>{order.order.email}</h3>
                        <table key={order.id} className="table mb-5">
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
            })}

        </>
    )
}

export default OrdersTable