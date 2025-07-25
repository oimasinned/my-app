import ProductList from "./ProductList";
import OrderStatus from './OrderStatus';
import React, { useEffect, useState } from 'react';

export default function Home(){

    const [orders, setOrders] = useState([]);

    return (<div>
        <ProductList setOrders={setOrders} orders={orders} />
        <OrderStatus orders={orders} />
        </div>
    )
}