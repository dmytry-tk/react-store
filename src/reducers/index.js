import {updateBookList} from "./book-list";
import {updateShoppingCart} from "./shopping-cart";
// const initialState = {
//     bookList: {
//         books: [],
//         loading: true,
//         error: null,
//     },
//     shoppingCart: {
//         cartItems: [],
//         orderTotal: 225
//     }
// }

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
    // switch (action.type) {
    //     case 'FETCH_BOOKS_LOADED':
    //     case 'FETCH_BOOKS_REQUESTED':
    //     case 'FETCH_BOOKS_ERROR':
    //         return {
    //             ...state,
    //             bookList: updateBookList(state, action)
    //         }
    //     case 'BOOK_ADDED_TO_CART':
    //     case 'BOOK_REMOVED_FROM_CART':
    //     case 'ALL_BOOKS_REMOVED_FROM_CART':
    //         return {
    //             ...state,
    //             shoppingCart: updateShoppingCart(state, action)
    //         }
    //     default:
    //         return state;
    // }
    // return state;
}

export default reducer;




// const reducer = (state = initialState, action) => {
//     console.log(action.type)
//     switch (action.type) {
//         case 'FETCH_BOOKS_LOADED':
//             return {
//                 ...state,
//                 books: action.payload,
//                 loading: false,
//                 error: null,
//             }
//
//         case 'FETCH_BOOKS_REQUESTED':
//             return {
//                 ...state,
//                 books: [],
//                 loading: true,
//                 error: null,
//             }
//         case 'FETCH_BOOKS_ERROR':
//             return {
//                 ...state,
//                 error: action.error,
//             }
//         case 'BOOK_ADDED_TO_CART':
//             return updateOrder(state, action.payload, 1)
//         case 'BOOK_REMOVED_FROM_CART':
//             return updateOrder(state, action.payload, -1)
//         case 'ALL_BOOKS_REMOVED_FROM_CART':
//             const item = state.cartItems.find(({id}) => id === action.payload);
//             return updateOrder(state, action.payload, -item.count)
//
//         default:
//             return state;
//     }
//     return state;
// }