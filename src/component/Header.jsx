import React from "react";
import {Link} from "react-router-dom";



export const Header = () =>{
    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li><Link to='/Home'>Strona Główna</Link></li>
                    <li><Link to="/About">O mnie</Link></li>
                    <li><Link to="/Projects">Projekty</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/Contact">Kontakt</Link></li>
                </ul>
            </nav>
        </header>
    )
}