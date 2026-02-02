
import "./style/header.css"
import Mode from "./mode";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import SkateLogo from "../assets/logo.png"
import { useState } from "react";

export default function Navbar(){
    
    const [ cerrar , setCerrar ] = useState(false);

    const toogleeMenu = () => {
        setCerrar(!cerrar);
    }
    return(
        <header>
            <div className="header-nav">
                <div className="logo">
                    <img src={SkateLogo} alt="logotipo" className="img-logo"/>
                    <p>Kickwave</p>
                </div>
                <div className="menu-nav">
                    <div className="menu">
                        <input type="checkbox" id="menu-item"/>
                        <label htmlFor="menu-item" id="menu-label">
                            <button id="menu-button" onClick={toogleeMenu}>
                                {cerrar ? <X className="icon-menu"/> : <Menu className="icon-menu"/>}
                            </button>
                        </label>
                        <nav className={cerrar ? "menu-open" : "menu-closed"}>
                            <ul>
                                <li><a href="#info-skate">Guía Inicial</a></li>
                                <li><a href="#setup-skater">Setup</a></li>
                                <li><a href="#outfit-Skater">Outfits</a></li>
                                <li><a href="#trucos-skate">Trick List</a></li>
                                <li><a href="#cultura-skate">Cultura Skate</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="tema">
                    <Mode/>
                </div>
            </div>
        </header>
    )
}