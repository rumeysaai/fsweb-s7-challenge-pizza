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
                <span>fırsatı kaçırma</span>
                <p>KOD ACIKTIRIR</p>
                <p>PİZZA DOYURUR</p>
                <Button color="warning" onClick={() => { navigate("/pizza") }} >ACIKTIM</Button>
            </div>
        </div>
    )
}
export default HomePage;