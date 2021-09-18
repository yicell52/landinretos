import React, { useState } from "react";
import "../App.css";

function Navbar() {
    const [showLink, setShowLinks] = useState(false);

    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="links" id={showLink ? "hidden" : ""}>
                    <a href="/">
                        <i class="fab fa-earlybirds"></i>
                    </a>
                    <a href="/Inicio">Inicio</a>
                    <a href="#Retos">Retos</a>
                </div>
                <button onClick={() => setShowLinks(!showLink)}>
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Buscar reto..." />
                <button>Buscar</button>
            </div>
        </div>
    );
}

export default Navbar;
