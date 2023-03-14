import React from "react";
import { CardBody, CardTitle, CardText } from "reactstrap";
import './ConfirmationPage.css';

const ConfirmationPage = ({ order }) => {

    return (
        <div className="main-cont">
            <div className="texts">
                <span>lezzetin yolda</span>
                <p >SİPARİŞ ALINDI</p>
            </div>
            <div className="order-detailss">
                <div className="order-content">
                    <h4 className="total-summary headerr">{order.name}</h4>
                    <p>Boyut: <b>{order.size}</b></p>
                    <p>Hamur: <b>{order.crust}</b></p>
                    <p>Ek Malzemeler: <b>{order.extraStuff}</b></p>
                    <p>Sipariş Notu: <b>{order.note}</b></p>
                </div>
                <div className="total-price">
                        <CardBody>
                            <CardTitle  tag="total-summary">
                                <h4 className="total-summary">Sipariş Toplamı</h4>
                            </CardTitle>
                            <CardText className="secim-summary">
                                <h6>Seçimler</h6>
                                <h6>{order.totalPrice}₺</h6>
                            </CardText>
                            <CardText className="total-summary">
                                <h6>Toplam</h6>
                                <h6>{order.totalPrice}₺</h6>
                            </CardText>
                        </CardBody>
                    </div>
            </div>
        </div>
    )
}
export default ConfirmationPage;