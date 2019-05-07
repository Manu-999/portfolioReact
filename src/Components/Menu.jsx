import React from 'react';
import './Menu.scss';
import Footer from './Footer';

function Menu() {
    return (
        <div>
            <h1 className="title">
                Manuel Balbás
            </h1>
            <h2 className="subtitle">
                Web Developer
            </h2>
            <nav className="menu">
                <li className="menu-item">Inicio</li>
                <li className="menu-item">Sobre Mi</li>
                <li className="menu-item">Proyectos</li>
                <li className="menu-item">Contacto</li>
            </nav>
            <Footer />
        </div>
    )
}

export default Menu;