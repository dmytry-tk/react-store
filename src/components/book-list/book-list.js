import React, { Component } from 'react';
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from '../hoc'
import { booksLoaded } from "../../actions";
import { compose } from "redux";
import './book-list.sass'
import Spinner from "../spinner";

class BookList extends Component {

    componentDidMount() {
        const { bookstoreService, booksLoaded } = this.props
        bookstoreService.getBooks()
            .then((data) => {
                booksLoaded(data)
            });
        // // 1. receive data
        // const { bookstoreService } = this.props
        // const data = bookstoreService.getBooks();
        // // 2. dispatch action to store
        // this.props.booksLoaded(data)
    }

    render() {
        const { books, loading } = this.props;

        if(loading) {
            return <Spinner />;
        }
        return(
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        )
    }
}
const mapStateToProps = ({ books, loading }) => {
        return { books, loading };
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

const mapDispatchToProps = {
    booksLoaded
};

// export default withBookstoreService()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList)
// )

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);//урок 1263453


//ветка 2 была создана