import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import "./navBar.scss";

// Aqui meteremos Idiomas, Enlace a las casas



export default function NavBar() {
    const { t, i18n } = useTranslation("global");


    return (
        <nav >
            <ul>
                <li className="li-nav house-nav"><Link className="link-nav" to="/"> 🏰 </Link></li>
                <li onClick={() => i18n.changeLanguage("es")} className="li-nav"> 🇪🇸 </li>
                <li onClick={() => i18n.changeLanguage("en")} className="li-nav"> 🇬🇧 </li>
            </ul>
        </nav>
    )
}