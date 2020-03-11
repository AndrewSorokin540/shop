import React from 'react';
import { connect } from 'react-redux';
import { itemAddToCart } from '../../actions';
import './modal-order.scss';

class ModalOrder extends React.Component {

    state = {
        itemsNumber: 1
    }

    increaseNumber() {
        this.setState({
            itemsNumber: this.state.itemsNumber + 1
        })
    }

    decreaseNumber() {
        if (this.state.itemsNumber > 1) {
            this.setState({
                itemsNumber: this.state.itemsNumber - 1
            })
        }
    }

    render() {
        const { id, title, price, coverImage, ingredientsInRus } = this.props.dataItems[this.props.openedItemId - 1]
        console.log(this.props.dataItems[this.props.openedItemId - 1])
        return (
            <div className='modal-order'>
                <div className="modal-order__img" style={{ backgroundImage: `url(${coverImage})` }} />
                <div className="modal-order__content">
                    <h2 className="modal-order__title">{title}</h2>
                    <div className="modal-order__details">25 см, традиционное тесто, 430г</div>
                    <p className="modal-order__ingridients">{ingredientsInRus}</p>
                    <div className='modal-order__number'>
                        Количество:
                        <div>
                            <button className='modal-order__num-btn decreace' onClick={() => this.decreaseNumber()}>-</button>
                            {this.state.itemsNumber}
                            <button className='modal-order__num-btn increace' onClick={() => this.increaseNumber()}>+</button>
                        </div>
                    </div>
                    <button className='modal-order__button-to-cart button button-primary' onClick={() => this.props.itemAddToCart(id, this.state.itemsNumber)}>В корзину за {price.s}р.</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ dataItems, openedItemId }) => ({ dataItems, openedItemId })

const mapDispatchToProps = { itemAddToCart }

export default connect(mapStateToProps, mapDispatchToProps)(ModalOrder);