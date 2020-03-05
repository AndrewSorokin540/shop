import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo">Book Shop</div>
                <a href="#" className="header__link-to-cart">Cart</a>
            </div>
        </header>
    );
}

export default Header;