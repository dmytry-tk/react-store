import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookList from "../book-list";
import ShoppingCart from "../shopping-cart-table";

const HomePage = () => {
    return (
        <div>
            <BookList/>
            <ShoppingCart/>
        </div>

    )
}

export default HomePage