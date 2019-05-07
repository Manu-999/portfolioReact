import React from 'react';
import Menu from './Components/Menu';
import Renderer from './Components/Renderer';
import './App.scss';

function App() {
    return (
        <div className="app">
            <Menu />
            <Renderer />
        </div>
    )
}

export default App;