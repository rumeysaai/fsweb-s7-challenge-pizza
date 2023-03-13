import React from "react";
import {Route, Routes} from 'react-router-dom';
import HomePage from "../views/HomePage";
import OrderPage from "../views/OrderPage";
import ConfirmationPage from "../views/ConfirmationPage";
import "./Layout.css"

const Layout = () => {
    return(
        <div className="main-content">
            <header>
                <h1>Teknolojik Yemekler</h1>
            </header>
            <div className="page-content">
            <Routes>
                <Route path ="/" element = {<HomePage />}/>
                <Route path = "/pizza" element = {<OrderPage />} />
                <Route path = "/confirmation" element = {<ConfirmationPage />} />
            </Routes>
            </div>
        </div>
    )
}

export default Layout;