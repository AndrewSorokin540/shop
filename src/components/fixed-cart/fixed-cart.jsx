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

    sizeName = (name) => {
        switch (name) {
            case 'sm':
                return 'Маленькая'
            case 'md':
                return 'Средняя'
            case 'lg':
                return 'Большая'
        }
    }

    render() {

        console.log('Товары в корзине:', this.props.cart.order)

        const list = this.props.cart.order.map((item, index) => {
            const { id, title, size, count, total } = item;
            return (
            <li key={index} className='fixed-cart__li'>
                <div>
                    <div>
                        <span className="fixed-cart__item-title">{title}</span>
                        <span className="fixed-cart__item-size"> ({this.sizeName(size)})</span>
                    </div>
                    <div className="fixed-cart__number">Кол-во: {count}, сумма: {total}руб.</div>
                </div>
                <div className='fixed-cart__buttons'>
                    <div className='fixed-cart__buttons-group'>
                        <button className='button button-primary' onClick={() => this.props.itemRemoveFromCart(id ,size)}>-</button>
                        <button className='button button-primary' onClick={() => this.props.itemAddToCart(id, 1, size)}>+</button>
                    </div>
                    <button className='button button-primary' onClick={() => this.props.allItemsRemoveFromCart(id)}>Удалить всё</button>
                </div>
            </li>
        )})
        const classNames = this.state.cartVisible ? "fixed-cart" : "fixed-cart fixed-cart--hidden"
        if (this.props.cart.order.length < 1) {
            return null
        }
        return (
            <div className={classNames}>
                <div className="fixed-cart__header" onClick={() => this.toggle()}>
                    <span>Корзина</span>
                    <span>Всего: {this.props.cart.total} руб.</span>
                </div>
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