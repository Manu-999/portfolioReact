import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import Footer from './Footer';

function Menu() {
    return (
        <div className="menu-bar">
            <h1 className="title">
                Manuel Balbás
            </h1>
            <h2 className="subtitle">
                Web Developer
            </h2>
            <nav className="menu">
                <Link className="menu-item">Inicio</Link>
                <Link className="menu-item">¿Quién Soy?</Link>
                <Link className="menu-item">Proyectos</Link>
                <Link className="menu-item">Contacto</Link>
            </nav>
            <Footer />
        </div>
    )
}

export default Menu;