import React from 'react';
import './shopping-cart.sass'

const ShoppingCart = () => {
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
                <tr>
                    <td>1</td>
                    <td>Item1</td>
                    <td>2</td>
                    <td>Price</td>
                    <td>
                        <div><i className="far fa-minus-square"></i></div>
                        <div><i className="far fa-trash-alt"></i></div>
                        <div><i className="far fa-plus-square"></i></div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ShoppingCart