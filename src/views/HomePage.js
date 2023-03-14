import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import './HomePage.css'

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="main-containerr">

            <div className="img">
                <img src="./mvp-banner.png" alt="banner" />
            </div>
            <div className="text">
                <h1>Teknolojik Yemekler</h1>
                <span>fırsatı kaçırma</span>
                <p>KOD ACIKTIRIR</p>
                <p>PİZZA DOYURUR</p>
                <Button color="warning" onClick={() => { navigate("/pizza") }} >ACIKTIM</Button>
            </div>
            <div className="nav-bar">
                <a href="#"> <img src="./esnek/mini-buttons/1.png.svg" /> YENİ Kore</a>
                <a href="#"><img src="./esnek/mini-buttons/2.png.svg" /> Pizza</a>
                <a href="#"><img src="./esnek/mini-buttons/3.png.svg" /> Burger</a>
                <a href="#"><img src="./esnek/mini-buttons/4.png.svg" /> Kızartmalar</a>
                <a href="#"><img src="./esnek/mini-buttons/5.png.svg" /> Fast Food</a>
                <a href="#"><img src="./esnek/mini-buttons/6.png.svg" /> Gazlı İçecek</a>
            </div>
            <div className="banners">
                <div className="banner c1">
                    <h3>Özel Lezzetus</h3>
                    <h5>Pesto Pizza</h5>
                    <Button>Sipariş Ver</Button>
                </div>
                <div className="banner c2">
                    
                </div>
                <div className="banner c3">

                </div>
            </div>
        </div>
    )
}
export default HomePage;