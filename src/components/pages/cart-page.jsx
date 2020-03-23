import React from 'react';
import { connect } from 'react-redux';
import { itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart } from '../../actions';
import OrderForm from '../order-form';
import OrderTable from '../order-table';

const CartPage = ({ cart, itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart }) => {

    if (cart.order.length < 1) {
        return <h2>Корзина пуста</h2>
    }
    return (
        <React.Fragment>
            <h2>Корзина</h2>
            <OrderTable cart={cart}
                itemRemoveFromCart={itemRemoveFromCart}
                allItemsRemoveFromCart={allItemsRemoveFromCart}
                itemAddToCart={itemAddToCart}
            />
            <OrderForm />
        </React.Fragment>
    );
}

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = { itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart }

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);