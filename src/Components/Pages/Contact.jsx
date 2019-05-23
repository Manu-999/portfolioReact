import React from 'react';
import './Contact.scss';

function Contact() {
    return (
        <div className="contact">
            <h1 className="contact-title">Puedes contactar conmigo a través de este formulario o puedes verme en las redes</h1>
            <form className="contact-form">
                <input type="text" placeholder="Nombre" className="contact-input"></input>
                <input type="email" placeholder="Email" className="contact-input"></input>
                <textarea type="textarea" cols="50" wrap="hard" rows="3" placeholder="Deja aquí tu mensaje" className="contact-input"></textarea>
                <input type="button" value="Enviar" className="contact-input contact-button"></input>
            </form>
        </div>
    )
};

export default Contact;
