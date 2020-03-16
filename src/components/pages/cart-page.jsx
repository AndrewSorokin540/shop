import React from 'react';
import { connect } from 'react-redux';
import { itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart } from '../../actions';
import './cart-page.scss';

const CartPage = (props) => {
    if (props.cart.length < 1) {
        return <h2>Корзина пуста</h2>
    }
    const tableBody = props.cart.map((item, index) => {
        const { id, title, count, size } = item;
        return (
            <tr key={index}>
                <td>{title}</td>
                <td className='text-center'>{count}</td>
                <td className='cart-table__td-button'><button className='button button-primary' onClick={() => props.itemRemoveFromCart(id, size)}>-</button></td>
                <td className='cart-table__td-button'><button className='button button-primary' onClick={() => props.allItemsRemoveFromCart(id)}>Удалить все</button></td>
                <td className='cart-table__td-button'><button className='button button-primary' onClick={() => props.itemAddToCart(id, 1, size)}>+</button></td>
            </tr>
        )
    })
    return (
        <table className="cart-table">
            <tbody>
                {tableBody}
            </tbody>
        </table>
    );
}

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = { itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart }

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);