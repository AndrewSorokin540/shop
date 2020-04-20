import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Logo from '../../img/logo.png';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {

    state = {
        scrollTarget: null
    }

    scrollLinksData = [
        {
            name: 'Пицца',
            linkTo: 'PizzaList'
        },
        {
            name: 'Напитки',
            linkTo: 'drinksList'
        },
    ];

    onLinkClick = (el) => {
        if (this.props.history.location.pathname === '/'){
            document.getElementById(el).scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
        else{
            this.setState({
                scrollTarget: el
            })
        }
    }

    componentDidUpdate() {
        const scrollTarget = document.getElementById(this.state.scrollTarget);
        if (scrollTarget) {
            scrollTarget.scrollIntoView({ block: 'start', behavior: 'smooth' });
            this.setState({
                scrollTarget: null
            })
        }
    }

    render() {

        const scrollLinks = this.scrollLinksData.map((item, index) => (
            <li key={index}>
                <Link to='/'><div className='link-style' onClick={() => this.onLinkClick(item.linkTo)}>{item.name}</div></Link>
            </li>
        ))

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
                                    {scrollLinks}
                                    <li>
                                        <Link to='/cart'>Корзина</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}



export default withRouter(Header);