import React, { Fragment } from 'react';
import './book-list-item.sass'

const BookListItem = ({ book }) => {
    const { title, author, price, img } = book;
    return(
        <div className = 'book-list-item'>
            <div className="img-item">
                <a href="#"><img src={img} alt=""/></a>
            </div>
            <div className="desc-item">
                <span><strong>title:</strong> {title}</span>
                <span><strong>author:</strong> {author}</span>
                <span><strong>price:</strong> {price}</span>
                <div className="button">Add to cart</div>
            </div>
        </div>
    )
}

export default BookListItem