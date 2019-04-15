import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.sass'
import { withBookstoreService } from '../hoc';
import { HomePage, CartPage } from '../pages';
import { Switch, Route } from "react-router-dom"
import Header from "../header";

const App = () => {
    return (
        <div className = "wrap">
            <Header/>
            <Switch>
                 <Route
                     path={"/"}
                     component={HomePage}
                     exact/>
                 <Route
                     path={"/cart/"}
                     component={CartPage}
                     exact/>
                 <Route component={HomePage} />

            </Switch>
        </div>
    )
}

export default withBookstoreService()(App)