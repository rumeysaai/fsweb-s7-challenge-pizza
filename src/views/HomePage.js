import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import './HomePage.css'

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="home-container">
            <div className="home-container-main">
                <div className="text">
                    <h1>Teknolojik Yemekler</h1>
                    <span>fırsatı kaçırma</span>
                    <p>KOD ACIKTIRIR <br />PİZZA DOYURUR</p>
                    <Button color="warning" onClick={() => { navigate("/pizza") }} >ACIKTIM</Button>
                </div>
            </div>
            <div className="nav-bar">
                <a href="/"> <img src="./esnek/mini-buttons/1.png.svg" /> YENİ Kore</a>
                <a href="/"><img src="./esnek/mini-buttons/2.png.svg" /> Pizza</a>
                <a href="/"><img src="./esnek/mini-buttons/3.png.svg" /> Burger</a>
                <a href="/"><img src="./esnek/mini-buttons/4.png.svg" /> Kızartmalar</a>
                <a href="/"><img src="./esnek/mini-buttons/5.png.svg" /> Fast Food</a>
                <a href="/"><img src="./esnek/mini-buttons/6.png.svg" /> Gazlı İçecek</a>
            </div>
            <div className="home-container-second">
                <div className="first-banners">
                    <div className="half-banner1">
                        <div className="banner c1">
                            <h2>Özel Lezzetus</h2>
                            <h5>Pesto Pizza</h5>
                            <Button>Sipariş Ver</Button>
                        </div>
                    </div>
                    <div className="half-banner2">
                        <div className="banner c2">
                            <h5>Hackathlon Burger Menü</h5>
                            <Button>Sipariş Ver</Button>
                        </div>
                        <div className="banner c3">
                            <h5><span>Çooooook</span> hızlı npm gibi kurye</h5>
                            <Button>Sipariş Ver</Button>
                        </div>
                    </div>
                </div>
                <div className="second-header">
                    <span>en çok paketlenen menüler</span>
                    <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
                </div>
                <div className="second-banners">
                    <div className="second-nav-bar">
                        <a href="/"> <img src="./esnek/mini-buttons/1.png.svg" /> YENİ Kore</a>
                        <a href="/"><img src="./esnek/mini-buttons/2.png.svg" /> Pizza</a>
                        <a href="/"><img src="./esnek/mini-buttons/3.png.svg" /> Burger</a>
                        <a href="/"><img src="./esnek/mini-buttons/4.png.svg" /> Kızartmalar</a>
                        <a href="/"><img src="./esnek/mini-buttons/5.png.svg" /> Fast Food</a>
                        <a href="/"><img src="./esnek/mini-buttons/6.png.svg" /> Gazlı İçecek</a>
                    </div>

                    <div className="food-cards">
                        <div className="card1">

                        </div>
                        <div className="card2">

                        </div>
                        <div className="card3">

                        </div>
                    </div>
                </div>
                <footer>

                </footer>
            </div>

        </div>
    )
}
export default HomePage;