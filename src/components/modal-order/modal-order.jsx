import React from 'react';
import { connect } from 'react-redux';
import { itemAddToCart, closeModal } from '../../actions';
import './modal-order.scss';

class ModalOrder extends React.Component {

    state = {
        itemsNumber: 1,
        sizeName: 'sm'
    }

    changeNumber(val) {
        if (val === 'inc') {
            this.setState({
                itemsNumber: this.state.itemsNumber + 1
            })
        }
        if (val === 'dec') {
            if (this.state.itemsNumber > 1) {
                this.setState({
                    itemsNumber: this.state.itemsNumber - 1
                })
            }
        }
    }

    handleOptionChange = (e) => {
        this.setState({
            sizeName: e.target.value
        })
    }

    onAddItem() {
        this.props.itemAddToCart(this.props.openedItemId, this.state.itemsNumber, this.state.sizeName)
        this.props.closeModal()
    }

    mapSizeNameToSize(sizeName) {
        switch (sizeName) {
            case 'sm':
                return 35;
            case 'md':
                return 45;
            case 'lg':
                return 55;
            default:
                return null;
        }
    }

    render() {
        const { title, details, weight, coverImage, ingredientsInRus, } = this.props.dataItems.find(item => item.id === this.props.openedItemId)
        const { sizeName, itemsNumber } = this.state;

        //const radioInputs = 

        console.log(this.props.dataItems)

        return (
            <div className='modal-order'>
                <div className="modal-order__img" style={{ backgroundImage: `url(${coverImage})` }} />
                <div className="modal-order__content">
                    <h2 className="modal-order__title">{title}</h2>
                    <div className="modal-order__details">{this.mapSizeNameToSize(sizeName)} см{details[sizeName] && `, ${details[sizeName].weight} г.`}</div>
                    <p className="modal-order__ingridients">{ingredientsInRus}</p>
                    <form className="modal-order__size-form">

                        <input type="radio" name="size" value='sm' id='size-sm'
                            checked={sizeName === 'sm'}
                            onChange={this.handleOptionChange} />

                        <label htmlFor="size-sm">Маленькая</label>

                        <input type="radio" name="size" value='md' id='size-md'
                            checked={sizeName === 'md'}
                            onChange={this.handleOptionChange} />

                        <label htmlFor="size-md">Средняя</label>

                        <input type="radio" name="size" value='lg' id='size-lg'
                            checked={sizeName === 'lg'}
                            onChange={this.handleOptionChange} />

                        <label htmlFor="size-lg">Большая</label>

                    </form>
                    <div className='modal-order__number'>
                        Количество:
                        <div>
                            <button className='modal-order__num-btn decreace' onClick={() => this.changeNumber('dec')}>-</button>
                            {this.state.itemsNumber}
                            <button className='modal-order__num-btn increace' onClick={() => this.changeNumber('inc')}>+</button>
                        </div>
                    </div>
                    <button className='modal-order__button-to-cart button button-primary'
                        onClick={() => this.onAddItem()}>
                        В корзину за {details[sizeName].price * itemsNumber}р.
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ dataItems, modal: { openedItemId } }) => ({ dataItems, openedItemId })

const mapDispatchToProps = { itemAddToCart, closeModal }

export default connect(mapStateToProps, mapDispatchToProps)(ModalOrder);