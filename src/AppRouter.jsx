import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home';
import { Layout } from './Components/Layout/Layout.jsx';
import About from './Components/Pages/About';

function AppRouter() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/about" component={About} exact></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default AppRouter;