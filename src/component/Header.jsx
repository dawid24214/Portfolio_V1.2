import React from "react";
import {Link} from "react-router-dom";



export const Header = () =>{
    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li><Link to='/Home'>Strona Główna</Link></li>
                    <li><Link to="/About">O Nas</Link></li>
                    <li><Link to="/services">Usługi</Link></li>
                    <li><Link to="/events">Wydarzenia</Link></li>
                    <li><Link to="/gallery">Galeria</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </nav>
        </header>
    )
}