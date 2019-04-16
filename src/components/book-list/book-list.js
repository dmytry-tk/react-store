import React, { Component } from 'react';
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from '../hoc'
import {fetchBooks, bookAddedToCart } from "../../actions";
import { compose } from "redux";
import './book-list.sass'
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({books, addBookToCart}) => {
    return(
        <ul>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                                book={book}
                                addBookToCart={() => addBookToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
        // const {
        //     bookstoreService,
        //     booksLoaded,
        //     booksRequested,
        //     booksError } = this.props
        //
        // // 1. receive data
        // const { bookstoreService } = this.props
        // const data = bookstoreService.getBooks();
        // // 2. dispatch action to store
        // this.props.booksLoaded(data)
    }

    render() {
        const { books, loading, error, addBookToCart } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList
            books = {books}
            addBookToCart={addBookToCart}/>
    }
}
const mapStateToProps = ({ books, loading, error }) => {
        return { books, loading, error };
};

// const mapDispatchToProps = (dispatch) => {
//     return{
//         booksLoaded: (newBooks) => {
//             dispatch({
//                 type: 'BOOKS_LOADED',
//                 payload: newBooks
//             })
//         }
//     }
// };

// const mapDispatchToProps = {
//     booksLoaded,
//     booksRequested,
//     booksError
// };

// const mapDispatchToProps = (dispatch, ownProps) => { //ownProps - свойства, которые перешли от компонента
//     const { bookstoreService } = ownProps;
//     return {
//         fetchBooks: () => {
//             dispatch(booksRequested());
//             bookstoreService.getBooks()
//                 .then((data) => dispatch(booksLoaded(data)))
//                 .catch((error) => dispatch(booksError(error)))
//         }
//     }
// };


const mapDispatchToProps = (dispatch, ownProps) => { //ownProps - свойства, которые перешли от компонента
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        addBookToCart: (id) => {
            dispatch(bookAddedToCart(id))
        }
    }
};

// export default withBookstoreService()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList)
// )

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);//урок 1263453


//ветка 2 была создана