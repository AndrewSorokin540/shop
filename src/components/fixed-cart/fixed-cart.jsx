import React from 'react';
import { connect } from 'react-redux';
import { itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart } from '../../actions';
import './fixed-cart.scss'

class FixedCart extends React.Component {

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
                <div>
                    <div className="fixed-cart__item-title">{item.title}</div>
                    <div className="fixed-cart__number">Кол-во: {item.count}</div>
                </div>
                <div className='fixed-cart__buttons'>
                    <button className='button button-primary' onClick={() => this.props.itemRemoveFromCart(item.id)}>-</button>
                    <button className='button button-primary' onClick={() => this.props.allItemsRemoveFromCart(item.id)}>---</button>
                    <button className='button button-primary' onClick={() => this.props.itemAddToCart(item.id)}>+</button>
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

const mapDispatchToProps = { itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart }

export default connect(mapStateToProps, mapDispatchToProps)(FixedCart);