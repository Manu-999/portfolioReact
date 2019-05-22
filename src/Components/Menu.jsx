import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import Footer from './Footer';

function Menu(props) {


    return (
        <div className="menu-bar">
            <h1 className="title">
                Manuel Balbás
            </h1>
            <h2 className="subtitle">
                Web Developer
            </h2>
            <nav className="menu">
                <Link className="menu-item" to="/">Inicio</Link>
                <Link className="menu-item" to="/about">¿De dónde salgo?</Link>
                <Link className="menu-item" to="/projects">Proyectos</Link>
                <Link className="menu-item" to="/contact">Contacto</Link>
            </nav>
            <Footer />
        </div>
    )
}

export default Menu;