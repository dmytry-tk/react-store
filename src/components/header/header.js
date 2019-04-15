import React, { Component } from 'react';
import './header.sass'

const Header =() => {
    return(
        <header>
            <div className="title">Book Shop</div>
            <div className="info">
                <i className="fas fa-shopping-cart"></i>
                5
                items
                (250$)
            </div>
        </header>
    )
}

export default Header