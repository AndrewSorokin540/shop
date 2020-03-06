import React from 'react';
import { connect } from 'react-redux';

class CartPage extends React.Component {

    render() {
        const list = this.props.cart.map((item, index) => (
            <li key={index}>
                {item.title} {item.count && (item.count)}
            </li>
        ))
        return (
            <React.Fragment>
                <h2>Корзина</h2>
                <div className="catalog">
                    <ul>
                        {list}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ cart }) => ({ cart })

export default connect(mapStateToProps)(CartPage);