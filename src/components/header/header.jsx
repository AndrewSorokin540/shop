import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo">Book Shop</div>
                <ul>
                    <li>
                    <Link to='/pizza'>Пицца</Link>
                    </li>
                    <li>
                    <Link to='/drinks'>Напитки</Link>
                    </li>
                </ul>
                <a href="#" className="header__link-to-cart">Cart</a>
            </div>
        </header>
    );
}

export default Header;