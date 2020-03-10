import React from 'react';
import { connect } from 'react-redux';
import './temp.scss'

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

const mapDispatchToProps = (dispatch) => {
    return {
        itemRemoveFromCart: (itemId) => {
            dispatch({
                type: 'ITEM_REMOVE_FROM_CART',
                payload: itemId
            })
        },
        allItemsRemoveFromCart: (itemId) => {
            dispatch({
                type: 'ALL_ITEMS_REMOVE_FROM_CART',
                payload: itemId
            })
        },
        addItemToCart: (itemId) => {
            dispatch({
                type: 'ITEM_ADD_TO_CART',
                payload: itemId
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);