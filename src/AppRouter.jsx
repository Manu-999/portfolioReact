import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home';
import { Layout } from './Components/Layout/Layout.jsx';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';

function AppRouter() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/about" component={About} exact></Route>
                    <Route path="/projects" component={Projects} exact></Route>
                    <Route path="/contact" component={Contact} exact></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default AppRouter;