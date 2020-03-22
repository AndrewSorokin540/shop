import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Logo from '../../img/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header__fixed">
                <div className="container header__content">
                    <div className="header__top">
                        <img className='header__logo' src={Logo} alt="logo" />
                    </div>
                    <div className="header__bottom">
                        <nav>
                            <ul className='header__nav-list'>
                                <li>
                                    <Link to='/'>Главная</Link>
                                </li>
                                <li>
                                    <a href="#">Пицца</a>
                                </li>
                                <li>
                                    <a href="#">Напитки</a>
                                </li>
                                <li>
                                    <Link to='/cart'>Корзина</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;