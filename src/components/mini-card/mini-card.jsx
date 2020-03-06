import React from 'react';
import './mini-card.scss';
import { connect } from 'react-redux';

const MiniCard = ({ itemId, title, author, price, coverImage, itemAddToCart }) => {
    return (
        <div className="mini-card">
            <div className="mini-card__img" style={{ backgroundImage: `url(${coverImage})` }} />
            <div className="mini-card__body">
                <div className="mini-card__content">
                    <div className="mini-card__item-title">{title}</div>
                    <div className="mini-card__item-subtitle">{author}</div>
                    <div className="mini-card__item-price">{price} руб.</div>
                </div>
                <button onClick={() => itemAddToCart(itemId)}>Купить</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        itemAddToCart: (itemId) => {
            dispatch({
                type: 'ITEM_ADD_TO_CART',
                payload: itemId
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(MiniCard);