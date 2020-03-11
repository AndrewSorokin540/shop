import React from 'react';
import { connect } from 'react-redux';
import { itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart } from '../../actions';

const CartPage = (props) => {

    const list = props.cart.map((item, index) => (
        <li key={index}>
            {item.title} {item.count && (item.count)}
            <button onClick={() => props.itemRemoveFromCart(item.id)}>-</button>
            <button onClick={() => props.allItemsRemoveFromCart(item.id)}>---</button>
            <button onClick={() => props.addItemToCart(item.id)}>+</button>
        </li>
    ))
    return (
        <React.Fragment>
            <h2>Корзина</h2>
            <div className="cart-table">
                <ul>
                    {list}
                </ul>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = { itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart }

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);