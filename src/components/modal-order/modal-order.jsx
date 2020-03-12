import React from 'react';
import { connect } from 'react-redux';
import { itemAddToCart, closeModal } from '../../actions';
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

    onAddItem() {
        this.props.itemAddToCart(this.props.openedItemId, this.state.itemsNumber)
        this.props.closeModal()
    }
    
    render() {
        const { title, price, coverImage, ingredientsInRus } = this.props.dataItems.find(item => item.id === this.props.openedItemId)
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
                    <button className='modal-order__button-to-cart button button-primary'
                        onClick={() => this.onAddItem()}>
                        В корзину за {price.s}р.
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ dataItems, modal: { openedItemId } }) => ({ dataItems, openedItemId })

const mapDispatchToProps = { itemAddToCart, closeModal }

export default connect(mapStateToProps, mapDispatchToProps)(ModalOrder);