import React from 'react';
import Menu from '../Menu.jsx';
import './Layout.scss';


export function Layout(props) {
    
    return (
        <div className="layout">
            <Menu />
            <div className="main" id="main">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;