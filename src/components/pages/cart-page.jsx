import React from 'react';
import { connect } from 'react-redux';
import { itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart } from '../../actions';
import './cart-page.scss';
import OrderForm from '../order-form';

const CartPage = ({ cart, orderPlaced, itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart }) => {

    if (orderPlaced) {
        return <h2>Спасибо за заказ!</h2>
    }
    if (cart.order.length < 1) {
        return <h2>Корзина пуста</h2>
    }
    const tableBody = cart.order.map((item, index) => {
        const { id, title, count, size } = item;
        return (
            <tr key={index}>
                <td>{title}</td>
                <td className='text-center'>{count}</td>
                <td className='cart-table__td-button'><button className='button button-primary' onClick={() => itemRemoveFromCart(id, size)}>-</button></td>
                <td className='cart-table__td-button'><button className='button button-primary' onClick={() => allItemsRemoveFromCart(id, size)}>Удалить все</button></td>
                <td className='cart-table__td-button'><button className='button button-primary' onClick={() => itemAddToCart(id, 1, size)}>+</button></td>
            </tr>
        )
    })
    return (
        <React.Fragment>
            <h2>Корзина</h2>
            <table className="cart-table">
                <tbody>
                    {tableBody}
                    <tr>
                        <td colSpan='2'>Итого:</td>
                        <td colSpan='3' className='text-center'>{cart.total} руб.</td>
                    </tr>
                </tbody>
            </table>
            <OrderForm />
        </React.Fragment>
    );
}

const mapStateToProps = ({ cart, placedOrder: {orderPlaced} }) => ({ cart, orderPlaced })

const mapDispatchToProps = { itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart }

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);