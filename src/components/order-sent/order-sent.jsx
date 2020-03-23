import React from 'react';
import './order-sent.scss';
import pizzaGoingImg from '../../img/pizza-going.png';
import { orderSent } from '../../actions';
import { connect } from 'react-redux';

const OrderSent = ({ orderSent }) => {
    return (
        <div className='order-sent text-center'>
            <h2>Спасибо!</h2>
            <p>Наш менеджер не свяжется с Вами в ближайшее время, потому что его у нас нет.</p>
            <img className='order-sent__courier' src={pizzaGoingImg} alt="Your order preparing" />
            <button className='button button-primary' onClick={orderSent}>Закрыть</button>
        </div>
    );
}

const mapDispatchToProps = { orderSent }

export default connect(null, mapDispatchToProps)(OrderSent);