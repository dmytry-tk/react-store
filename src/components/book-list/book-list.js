import React, { Component } from 'react';
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from '../hoc'
import { booksLoaded } from "../../actions";
import {bindActionCreators, compose} from "redux";

class BookList extends Component {

    componentDidMount() {
        // 1. receive data
        const { bookstoreService } = this.props
        const data = bookstoreService.getBooks();
        console.log(data)
        // 2. dispatch action to store
        this.props.booksLoaded(data)
    }

    render() {
        const { books } = this.props;
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
const mapStateToProps = ({ books }) => {
        return { books };
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
)(BookList);//урок 126