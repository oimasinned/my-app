import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import OrderStatus from "./OrderStatus";
import Login from "./Login";
import Home from "./Home";

function App() {
    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/OrderStatus" element={<OrderStatus />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </div>
        </>
    )
}

export default App;