import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';
import Footer from './Footer';

function Menu(props) {

    const toggleMenu = () => {
        let element = document.getElementById('menu-bar');
        if (element.style.visibility === 'hidden') {
            element.style.visibility = 'visible';
        } else {
            element.style.visibility = 'hidden';
        }
    };

    return (
        <div className="menu-container">
            <i className="fas fa-bars mobile-menu" onClick={toggleMenu}></i>
            <div className="menu-bar" id="menu-bar">
                <img src="/images/mi-foto.png" alt="mi-foto" className="picture"></img>
                <nav className="menu">
                    <NavLink className="menu-item" to="/">Inicio</NavLink>
                    <NavLink className="menu-item" to="/about">¿De dónde salgo?</NavLink>
                    <NavLink className="menu-item" to="/projects">Proyectos</NavLink>
                    <NavLink className="menu-item" to="/contact">Contacto</NavLink>
                </nav>
                <Footer />
            </div>
        </div>
    )
};

export default Menu;