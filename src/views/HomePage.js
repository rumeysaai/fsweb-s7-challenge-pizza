import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { foods } from '../utils/ingredients'
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
                            <a href="/">SİPARİŞ VER</a>
                        </div>
                    </div>
                    <div className="half-banner2">
                        <div className="banner c2">
                            <h5>Hackathlon Burger Menü</h5>
                            <a href="/">SİPARİŞ VER</a>
                        </div>
                        <div className="banner c3">
                            <h5><span className="redd">Çooooook</span> hızlı npm gibi kurye</h5>
                            <a href="/">SİPARİŞ VER</a>
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
                            <img src="./esnek/food-1.png" />
                            <h5>{foods[0].name}</h5>
                            <div className="card-details">
                                <p>{foods[0].rate}</p>
                                <p>{foods[0].comments}</p>
                                <p>{foods[0].price}</p>
                            </div>
                        </div>
                        <div className="card2">
                            <img src="./esnek/food-2.png" />
                            <h5>{foods[1].name}</h5>
                            <div className="card-details">
                                <p>{foods[1].rate}</p>
                                <p>{foods[1].comments}</p>
                                <p>{foods[1].price}</p>
                            </div>
                        </div>
                        <div className="card3">
                            <img src="./esnek/food-3.png" />
                            <h5>{foods[2].name}</h5>
                            <div className="card-details">
                                <p>{foods[2].rate}</p>
                                <p>{foods[2].comments}</p>
                                <p>{foods[2].price}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <footer>
                <div className="menu-info">
                    <div className="contact-info">
                        <h2>Teknolojik Yemekler</h2>
                        <img src="./esnek/icon-1.png" />
                        <address>341 Londenderry Road. İstanbul Türkiye</address>
                        <img src="./esnek/icon-2.png" />
                        <p>aciktim@teknolojikyemekler.com</p>
                        <img src="./esnek/icon-3.png" />
                        <p>+90 216 123 45 67</p>
                    </div>
                    <div className="footer-menus">
                        <h4>Sıcacık Menüler</h4>
                        <p>5 Kişilik Hackathlon Pizza</p>
                        <p>Pepperoni Pizza</p>
                        <p>Terminal Pizza</p>
                        <p>Fried Chicken Burger</p>
                        <p>Position Absolute Acı Burger</p>
                    </div>
                </div>
                <div className="insta-info">
                    <h4>Instagram</h4>
                    <div className="insta-img">
                        <img src="./esnek/insta/li-0.png" />
                        <img src="./esnek/insta/li-1.png" />
                        <img src="./esnek/insta/li-2.png" />
                        <img src="./esnek/insta/li-3.png" />
                        <img src="./esnek/insta/li-4.png" />
                        <img src="./esnek/insta/li-5.png" />
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default HomePage;