
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

const fetchBooks = (bookstoreService, dispatch) => () => {//внутренняя функция предназначена для компонента, внешняя для работа mapDispatch
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)))
}

export {
  fetchBooks,
};