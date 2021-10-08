import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Desktop from './pages/desktop/desktop';
import Nav from './pages/nav/nav';
import Produto from './pages/produtos/produto';
import Footer from './pages/footer/footer';
import SideNav from './pages/sideNav/sideNav';
import Contato from './pages/contato/contato';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Desktop} />
                <Route path="/nav" component={Nav} />
                <Route path="/produto" component={Produto} />
                <Route path="/footer" component={Footer} />
                <Route path="/sidenav" component={SideNav} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    )
}
