import React from 'react';
import './mini-card.scss';

const MiniCard = () => {
    return (
        <div className="mini-card">
            <div className="mini-card__img" style={{ backgroundColor: 'blue' }} />
            <div className="mini-card__body">
                <div className="mini-card__content">
                    <div className="mini-card__item-title">Название книги</div>
                    <div className="mini-card__item-subtitle">Автор книги</div>
                    <div className="mini-card__item-price">100 руб.</div>
                </div>
                <button>Купить</button>
            </div>
        </div>
    );
}

export default MiniCard;