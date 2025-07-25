import { render } from '@testing-library/react';
import './OrderStatus.css';
import Order from './Order';

export default function OrderStatus({ orders }) {
    const safeOrders = Array.isArray(orders) ? orders : [];
    const mid = Math.ceil(safeOrders.length / 2);
    const firstColumnOrders = safeOrders.slice(0, mid);
    const secondColumnOrders = safeOrders.slice(mid);

    const renderColumn = (columnOrders) => (
        <div className="column">
            {columnOrders.map((order, idx) => (
                <div key={idx} className="card order-card">
                    <p>Product: {order.name}</p>
                    <p>Quantity: {order.quantity}</p>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <h1 className='order-title'>Order Status</h1>
            <div className="columns">
                {firstColumnOrders.length > 0 && renderColumn(firstColumnOrders)}
                {secondColumnOrders.length > 0 && renderColumn(secondColumnOrders)}
            </div>
        </>
    );
}