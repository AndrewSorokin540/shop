import React from 'react';
import { connect } from 'react-redux';
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
        return (
            <div className='modal-order'>
                <div className="modal-order__img" style={{ backgroundImage: `url(${coverImage})` }} />
                <div className="modal-order__content">
                    <h2 className="modal-order__title">{title}</h2>
                    <div className="modal-order__details">25 см, традиционное тесто, 430г</div>
                    <div className="modal-order__ingridients">{ingredientsInRus}</div>
                    <div>
                        Количество:
                        <button className='button button-primary' onClick={() => this.increaseNumber()}>+</button>
                        {this.state.itemsNumber}
                        <button className='button button-primary' onClick={() => this.decreaseNumber()}>-</button>
                    </div>
                    <button className='button button-primary' onClick={() => this.props.itemAddToCart(id, this.state.itemsNumber)}>В корзину</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ dataItems, openedItemId }) => ({ dataItems, openedItemId })

const mapDispatchToProps = (dispatch) => {
    return {
        itemAddToCart: (itemId, count) => {
            dispatch({
                type: 'ITEM_ADD_TO_CART',
                payload: { itemId, count }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalOrder);