import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart } from '../../actions';
import { sizeNameToRus } from '../../utils';
import './fixed-cart.scss';

const FixedCart = ({ itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart, cart }) => {

    const list = cart.order.map((item, index) => {
        const { id, title, size, count, total } = item;
        return (
            <li key={index} className='fixed-cart__li'>
                <div>
                    <div>
                        <span className="fixed-cart__item-title">{title}</span>
                        <span className="fixed-cart__item-size"> ({sizeNameToRus(size)})</span>
                    </div>
                    <div className="fixed-cart__number">Кол-во: {count}, сумма: {total}руб.</div>
                </div>
                <div className='fixed-cart__buttons'>
                    <div className='fixed-cart__buttons-group'>
                        <button className='button button-primary' onClick={() => itemRemoveFromCart(id, size)}>-</button>
                        <button className='button button-primary' onClick={() => itemAddToCart(id, 1, size)}>+</button>
                    </div>
                    <button className='button button-primary' onClick={() => allItemsRemoveFromCart(id, size)}>Удалить всё</button>
                </div>
            </li>
        )
    })

    const [cartVisible, setCartVisible] = useState(false)

    const classNames = cartVisible ? "fixed-cart" : "fixed-cart fixed-cart--hidden"
    
    if (cart.order.length < 1) {
        return null
    }
    
    return (
        <div className={classNames}>
            <div className="fixed-cart__header" onClick={() => setCartVisible(!cartVisible)}>
                <Link to='/cart' className='link-hover-underline' >Корзина ({cart.total} руб.)</Link>
                <div className='fixed-cart__toggler'/>
            </div>
            <div className="fixed-cart__body">
                <ul className='fixed-cart__ul'>
                    {list}
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = { itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart }

export default connect(mapStateToProps, mapDispatchToProps)(FixedCart);