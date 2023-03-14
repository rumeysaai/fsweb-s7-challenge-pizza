import React from "react";
import { CardBody, CardTitle, CardText } from "reactstrap";
import './ConfirmationPage.css';

const ConfirmationPage = ({ order }) => {

    return (
        <div className="main-cont">
            <div className="head">
                    <h2>Teknolojik Yemekler</h2>
                </div>
            <div className="texts">
                <span>lezzetin yolda</span>
                <p >SİPARİŞ ALINDI</p>
            </div>
            <div className="order-detailss">
                <div className="order-content">
                    <h4 className="total-summarys headerr">{order.name}</h4>
                    <p>Boyut: <b>{order.size}</b></p>
                    <p>Hamur: <b>{order.crust}</b></p>
                    <p>Ek Malzemeler: <b>{order.extraStuff}</b></p>
                    <p>Sipariş Notu: <b>{order.note}</b></p>
                </div>
                <div className="total-prices">
                        <CardBody>
                            <CardTitle  tag="total-summarys">
                                <h4 className="total-summarys">Sipariş Toplamı</h4>
                            </CardTitle>
                            <CardText className="secim-summarys">
                                <h6>Seçimler</h6>
                                <h6>{order.extraPrice}₺</h6>
                            </CardText>
                            <CardText className="total-summarys">
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