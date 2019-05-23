import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';
import Footer from './Footer';

function Menu(props) {


    return (
        <div className="menu-bar">
            <img src="/images/mi-foto.png" alt="mi-foto" className="picture"></img>
            <nav className="menu">
                <NavLink className="menu-item" to="/">Inicio</NavLink>
                <NavLink className="menu-item" to="/about">¿De dónde salgo?</NavLink>
                <NavLink className="menu-item" to="/projects">Proyectos</NavLink>
                <NavLink className="menu-item" to="/contact">Contacto</NavLink>
            </nav>
            <Footer />
        </div>
    )
}

export default Menu;