import React from 'react';
import './mini-card.scss';
import { connect } from 'react-redux';

const MiniCard = ({ id, title, ingredientsInRus, price, coverImage, openModal }) => {
    return (
        <div className="mini-card">
            <div className="mini-card__img" style={{ backgroundImage: `url(${coverImage})` }} />
            <div className="mini-card__body">
                <div className="mini-card__content">
                    <div className="mini-card__item-title">{title}</div>
                    <div className="mini-card__item-description">{ingredientsInRus}</div>
                    <div className="mini-card__item-price"> от {price.s} руб.</div>
                </div>
                <button className="button button-primary" onClick={() => openModal(id)}>Добавить в корзину</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (id) => {
            dispatch({
                type: 'MODAL_OPEN',
                payload: id
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(MiniCard);