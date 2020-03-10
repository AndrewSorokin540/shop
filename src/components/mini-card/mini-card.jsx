import React from 'react';
import './mini-card.scss';
import { connect } from 'react-redux';

const MiniCard = ({ id, title, ingredientsInRus, price, coverImage, itemAddToCart }) => {
    return (
        <div className="mini-card">
            <div className="mini-card__img" style={{ backgroundImage: `url(${coverImage})` }} />
            <div className="mini-card__body">
                <div className="mini-card__content">
                    <div className="mini-card__item-title">{title}</div>
                    <div className="mini-card__item-description">{ingredientsInRus}</div>
                    <div className="mini-card__item-price"> от {price.s} руб.</div>
                </div>
                <button className="button button-primary" onClick={() => itemAddToCart(id)}>Купить</button>
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