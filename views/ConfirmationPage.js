import React from "react";
import './ConfirmationPage.css';

const ConfirmationPage = ({ order }) => {
    
    return(
        <div className="main-cont">
            <div className="texts">
            <p>TEBRİKLER!</p>
            <p>PİZZANIZ YOLA ÇIKTI!</p>
            </div>
            <div className="order-details">
                <p>{order.name}</p>
                <p>{order.count}</p>
                <p>{order.crust}</p>
            </div>
        </div>
    )
}
export default ConfirmationPage;