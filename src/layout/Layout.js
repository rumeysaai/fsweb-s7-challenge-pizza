import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from "../views/HomePage";
import Order from "../components/Order"
import ConfirmationPage from "../views/ConfirmationPage";
import "./Layout.css"

const Layout = () => {
    const [siparis, setSiparis] = useState({});

    const siparisSonucu = (e) => {
        setSiparis(e);
        console.log(siparis);
    }
    return (
        <div className="main-content">
            <header>
                <h1>Teknolojik Yemekler</h1>
            </header>
            <div className="page-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pizza" element={<Order siparisSonucu={siparisSonucu} />} />
                    <Route path="/confirmation" element={<ConfirmationPage order={siparis} />} />
                </Routes>
            </div>
        </div>
    )
}

export default Layout;