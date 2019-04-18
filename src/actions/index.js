
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_LOADED',
        payload: newBooks
    };
};

const booksRequested = () => {
    return{
        type: 'FETCH_BOOKS_REQUESTED'
    }
}

const booksError = (error) => {
    return{
        type: 'FETCH_BOOKS_ERROR',
        error: error
    }
}

export const fetchBooks = (bookstoreService, dispatch) => () => {//внутренняя функция предназначена для компонента, внешняя для работа mapDispatch
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)))
}

export const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
};

export const allBooksRemovedFromCart = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookId
    }
};

export const bookRemovedFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    }
};