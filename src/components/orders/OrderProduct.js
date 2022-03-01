import React from 'react'
import { currencyFormat } from '../../functions/handlers'

const OrderProduct = ({item}) => {
    return (
        <div className="d-flex justify-content-between align-items-center mb-2 p-4 border-bottom" key={item.uid}>
            <div>
                <img className="product-img" data-src={item.image} alt={item.name} width="80" />
            </div>
            <div className="order-item-info d-flex flex-column align-items-end justify-content-end">
                <div>
                    <span className="order-item-name">{item.name}</span>
                </div>
                <div>
                    <span className="total">{currencyFormat(item.price)}</span>
                </div>
            </div>
        </div>
    )
}

export default OrderProduct