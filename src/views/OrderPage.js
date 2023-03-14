import React from "react";
import { NavLink } from "react-router-dom";
import Order from "../components/Order";
import './OrderPage.css';

const activeStyling = {
    textDecoration: "none",
};
const OrderPage = ({ updateOrder }) => {
    return (
        <div className="main-container">
            <div className="beige-rectangle">
                <div className="head">
                    <h2>Teknolojik Yemekler</h2>
                </div>
                <div className="head-img">
                    <img src="./esnek-form-banner.png" alt="banner" />

                </div>
                <nav className="nav-menu">
                    <NavLink to="/"
                        style={({ isActive }) => (isActive ? activeStyling : null)}
                    >Anasayfa</NavLink>
                    <NavLink to="/"
                        style={({ isActive }) => (isActive ? activeStyling : null)}
                    >Seçenekler</NavLink>
                    <NavLink to="/pizza"
                        style={({ isActive }) => (isActive ? activeStyling : null)}
                    >Sipariş Oluştur</NavLink>
                </nav>
            </div>
            <div className="order-form">
                <Order updateOrder={updateOrder} />
            </div>
        </div>

    )
}
export default OrderPage;