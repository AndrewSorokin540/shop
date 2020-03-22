import React from 'react';
import './order-sent.scss';
import pizzaGoingImg from '../../img/pizza-going.png';
import { orderSent } from '../../actions';
import { connect } from 'react-redux';

const OrderSent = ({orderSent}) => {
    return (
        <div className='order-sent'>
            <h2 className='text-center'>Спасибо!</h2>
            <h4 className='text-center'>Наш менеджер не свяжется с Вами в ближайшее время, потому что его у нас нет.</h4>
            <img className='order-sent__courier' src={pizzaGoingImg} alt="Your order preparing"/>
            <button className='button button-primary' onClick={orderSent}>Закрыть</button>
        </div>
    );
}

const mapDispatchToProps = { orderSent }

export default connect(null, mapDispatchToProps)(OrderSent);