import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Navbar";
import OrderStatus from "./OrderStatus";
import Login from "./Login";
import Home from "./Home";
import ProductList from "./ProductList"; // Import if you have a ProductList route

function App() {
    const [orders, setOrders] = useState([]);

    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<ProductList orders={orders} setOrders={setOrders} />} />
                    {/* Pass orders and setOrders as props */}
                    <Route path="/OrderStatus" element={<OrderStatus orders={orders} />} />
                    <Route path="/Login" element={<Login />} />
                    {/* Example: If you have a ProductList route */}
                </Routes>
            </div>
        </>
    )
}

export default App;