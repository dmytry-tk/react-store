import React, { Component } from 'react';
import './header.sass'
import {Link, NavLink} from "react-router-dom";

const Header =() => {
    return(
        <header>
            <Link to={'/'} className="title">Book Shop</Link>
            <div className="info">
                <Link to={'/cart/'}><i className="fas fa-shopping-cart"></i></Link>
                5
                items
                (250$)
            </div>
        </header>
    )
}

export default Header