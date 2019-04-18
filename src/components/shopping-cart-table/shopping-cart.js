import React from 'react';
import './shopping-cart.sass'
import {connect} from "react-redux";

import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart
} from "../../actions";

const ShoppingCart = ({ items, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return(
            <tr key = {id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <div
                        onClick={() => onDecrease(id)}>
                        <i className="far fa-minus-square"></i>
                    </div>
                    <div
                        onClick={() => onDelete(id)}>
                        <i className="far fa-trash-alt"></i>
                    </div>
                    <div
                        onClick={() => onIncrease(id)}>
                        <i className="far fa-plus-square"></i>
                    </div>
                </td>
            </tr>

        )
    }
    return(
        <table>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                {
                    items.map(renderRow)
                }
            </tbody>
        </table>
    )

}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
    return{
        items: cartItems,
        total: orderTotal
    }
}

// const mapDispatchToProps = () => {
//     return{
//         onIncrease: (id) => {
//             console.log(`Increase ${id}`)
//         },
//
//         onDecrease: (id) => {
//             console.log(`Decrease ${id}`)
//         },
//
//         onDelete: (id) => {
//             console.log(`Delete ${id}`)
//         }
//     }
// }

const mapDispatchToProps =  {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);