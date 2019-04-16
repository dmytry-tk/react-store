import React from 'react';
import BookListContainer from "../book-list";
import ShoppingCart from "../shopping-cart-table";

const HomePage = () => {
    return (
        <div>
            <BookListContainer/>
            <ShoppingCart/>
        </div>

    )
}

export default HomePage