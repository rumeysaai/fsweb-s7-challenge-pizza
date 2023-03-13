import React from "react";
import { Link } from "react-router-dom";
import Order from "../components/Order";
import './OrderPage.css';

const OrderPage = () => {
    return (
        <div className="main-container">
            <nav className="nav-menu">
                <Link to="/">Anasayfa</Link>
                <Link to="/">Seçenekler</Link>
                <Link to="/pizza">Sipariş Oluştur</Link>
            </nav>
            <div className="order-form">
                <Order />
            </div>
        </div>
        
    )
}
export default OrderPage;