import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from "../views/HomePage";
import OrderPage from "../views/OrderPage";
import ConfirmationPage from "../views/ConfirmationPage";
import "./Layout.css"

const Layout = ({order, updateOrder}) => {
    
    return (
        <div className="main-content">
            <div className="page-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pizza" element={<OrderPage updateOrder={updateOrder} />} />
                    <Route path="/confirmation" element={<ConfirmationPage order={order} />} />
                </Routes>
            </div>
        </div>
    )
}

export default Layout;