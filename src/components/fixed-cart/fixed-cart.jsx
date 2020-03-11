import React from 'react';
import { connect } from 'react-redux';
import './fixed-cart.scss'

class FixedCart extends React.Component  {

    state = {
        cartVisible: true
    }

    toggle() {
        this.setState({
            cartVisible: !this.state.cartVisible
        })
    }

    render() {
        const list = this.props.cart.map((item, index) => (
            <li key={index} className='fixed-cart__li'>
                {item.title}. Кол-во: {item.count && (item.count)}
                <div className='fixed-cart__buttons'>
                    <button className='button button-primary' onClick={() => this.props.itemRemoveFromCart(item.id)}>-</button>
                    <button className='button button-primary' onClick={() => this.props.allItemsRemoveFromCart(item.id)}>---</button>
                    <button className='button button-primary' onClick={() => this.props.addItemToCart(item.id)}>+</button>
                </div>
            </li>
        ))
        const classNames = this.state.cartVisible ? "fixed-cart" : "fixed-cart fixed-cart--hidden"
        if (this.props.cart.length < 1) {
            return null
        }
        return (
            <div className={classNames}>
                <div className="fixed-cart__header" onClick={() => this.toggle()}>Корзина</div>
                <div className="fixed-cart__body">
                    <ul className='fixed-cart__ul'>
                        {list}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = (dispatch) => {
    return {
        itemRemoveFromCart: (itemId) => {
            dispatch({
                type: 'ITEM_REMOVE_FROM_CART',
                payload: { itemId }
            })
        },
        allItemsRemoveFromCart: (itemId) => {
            dispatch({
                type: 'ALL_ITEMS_REMOVE_FROM_CART',
                payload: { itemId }
            })
        },
        addItemToCart: (itemId) => {
            dispatch({
                type: 'ITEM_ADD_TO_CART',
                payload: { itemId }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FixedCart);