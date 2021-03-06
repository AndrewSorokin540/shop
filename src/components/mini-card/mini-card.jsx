import React from 'react';
import './mini-card.scss';
import { connect } from 'react-redux';
import { openModalProduct } from '../../actions';

const MiniCard = ({ id, title, ingredientsInRus, details: {sm: {price}}, coverImage, openModalProduct, minicardType }) => {
    const classes = `mini-card ${minicardType === 'cuttingBoard' ? 'cutting-board' : ''}`
    return (
        <div className={classes}>
            <div className="mini-card__img" style={{ backgroundImage: `url(${coverImage})` }} />
            <div className="mini-card__body">
                <div className="mini-card__content">
                    <div className="mini-card__item-title">{title}</div>
                    <div className="mini-card__item-description">{ingredientsInRus}</div>
                    <div className="mini-card__item-price"> от {price} руб.</div>
                </div>
                <button className="button button-primary" onClick={() => openModalProduct(id)}>Добавить в корзину</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = { openModalProduct }

export default connect(null, mapDispatchToProps)(MiniCard);