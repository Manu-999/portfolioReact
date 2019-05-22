import React from 'react';
import './Contact.scss';

function Contact() {
    return (
        <div className="contact">
            <h1 className="contact-title">Puedes contactar conmigo a través de este formulario o puedes verme en las redes</h1>
            <form className="contact-form">
                <input type="text" placeholder="Nombre"></input>
                <input type="email" placeholder="Email"></input>
                <input type="textarea" placeholder="Deja aquí tu mensaje"></input>
                <input type="button" value="Enviar"></input>
            </form>
            <a href="https://github.com/Manu-999"><i className="fab fa-github social-icon"></i></a>
            <a href="https://www.linkedin.com/in/manuel-balbas-arribas/"><i className="fab fa-linkedin social-icon"></i></a>
        </div>
    )
};

export default Contact;
