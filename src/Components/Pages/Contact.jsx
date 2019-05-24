import React, { useState } from 'react';
import axios from 'axios';
import './Contact.scss';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    function onSubmit(e) {
        e.preventDefault();

        const body = { name, email, message };

        axios.post('http://localhost:8080/contact', body)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact">
            <h1 className="contact-title">Puedes contactar conmigo a través de este formulario o puedes verme en las redes</h1>
            <form className="contact-form" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    className="contact-input"
                >
                </input>
                <input
                    type="email"
                    placeholder="Email"
                    className="contact-input"
                >
                </input>
                <textarea
                    type="textarea"
                    cols="50"
                    wrap="hard"
                    rows="3"
                    placeholder="Deja aquí tu mensaje" className="contact-input"
                >
                </textarea>
                <input
                    type="submit"
                    value="Enviar"
                    className="contact-input contact-button"
                >
                </input>
            </form>
        </div>
    )
};

export default Contact;
