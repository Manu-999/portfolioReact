import React from 'react';
import Menu from '../Menu.jsx';
import Renderer from '../Renderer';
import './Layout.scss';

function Layout(props) {
    return (
        <div className="layout">
            <Menu />
            <Renderer />
        </div>
    )
}

export default Layout;
