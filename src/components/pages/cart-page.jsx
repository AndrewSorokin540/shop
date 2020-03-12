import React from 'react';
import { connect } from 'react-redux';
import { itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart } from '../../actions';
import './cart-page.scss';

const CartPage = (props) => {
    console.log(props.cart)
    const tableBody = props.cart.map((item, index) => (
        <tr key={index}>
            <td>{item.title}</td>
            <td>{item.count && (item.count)}</td>
            <td className='cart-table__td-button'><button className='button button-primary' onClick={() => props.itemRemoveFromCart(item.id)}>-</button></td>
            <td className='cart-table__td-button'><button className='button button-primary' onClick={() => props.allItemsRemoveFromCart(item.id)}>Удалить все</button></td>
            <td className='cart-table__td-button'><button className='button button-primary' onClick={() => props.itemAddToCart(item.id, 1)}>+</button></td>
        </tr>
    ))
    return (
        <table className="cart-table">
            {tableBody}
        </table>
    );
}

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = { itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart }

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);