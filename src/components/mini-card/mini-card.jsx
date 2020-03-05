import React from 'react';
import './mini-card.scss';

const MiniCard = ({ title, author, price, coverImage }) => {
    return (
        <div className="mini-card">
            <div className="mini-card__img" style={{ backgroundImage: `url(${coverImage})` }} />
            <div className="mini-card__body">
                <div className="mini-card__content">
                    <div className="mini-card__item-title">{title}</div>
                    <div className="mini-card__item-subtitle">{author}</div>
                    <div className="mini-card__item-price">{price} руб.</div>
                </div>
                <button>Купить</button>
            </div>
        </div>
    );
}

export default MiniCard;