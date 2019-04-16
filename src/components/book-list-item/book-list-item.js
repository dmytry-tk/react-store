import React from 'react';
import './book-list-item.sass'

const BookListItem = ({ book, addBookToCart }) => {
    const { title, author, price, img } = book;
    return(
        <div className = 'book-list-item'>
            <div className="img-item">
                <span><img src={img} alt=""/></span>
            </div>
            <div className="desc-item">
                <span><strong>title:</strong> {title}</span>
                <span><strong>author:</strong> {author}</span>
                <span><strong>price:</strong> {price}</span>
                <div className="button"
                    onClick={() => addBookToCart()}>Add to cart</div>
            </div>
        </div>
    )
}

export default BookListItem