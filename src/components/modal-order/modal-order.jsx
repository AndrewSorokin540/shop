import React from 'react';
import { connect } from 'react-redux';
import { itemAddToCart, closeModal } from '../../actions';
import { sizeNameToRus } from '../../utils';
import './modal-order.scss';

// ToDo: не работает через импорт
const concatObjectFields = (object) => {
    let result = [];
    Object.keys(object).forEach(key => {
        result = [...result, ...object[key]]
    })
    return result;
}

const ModalOrderView = ({ currentItem, sizeName, itemsNumber, changeNumber, changeSize, onAddItem }) => {
    
    const renderRadio = (currentItem, sizeName) => {
        return Object.keys(currentItem.details).map((keyName, index) => {
            return (
                <React.Fragment key={currentItem.id * index}>
                    <input key={'inputKey' + currentItem.id * index} type="radio" name="size" value={keyName} id={`size-${keyName}`}
                        checked={sizeName === keyName}
                        onChange={changeSize} 
                    />
                    <label key={'labelKey' + currentItem.id * index} htmlFor={`size-${keyName}`}>{sizeNameToRus(keyName)}</label>
                </React.Fragment>
            )
        })
    }

    const { title, details, coverImage, ingredientsInRus } = currentItem;
    return (
        <div className='modal-order'>
            <div className="modal-order__img" style={{ backgroundImage: `url(${coverImage})` }} />
            <div className="modal-order__content">
                <h2 className="modal-order__title">{title}</h2>
                <div className="modal-order__details">{details[sizeName].diameter && details[sizeName].diameter + ','} {details[sizeName].weight}</div>
                <p className="modal-order__ingridients">{ingredientsInRus}</p>
                <form className="modal-order__size-form">
                    {renderRadio(currentItem, sizeName)}
                </form>
                <div className='modal-order__number'>
                    Количество:
                    <div>
                        <button className='modal-order__num-btn decreace' onClick={() => changeNumber('dec')}>-</button>
                        {itemsNumber}
                        <button className='modal-order__num-btn increace' onClick={() => changeNumber('inc')}>+</button>
                    </div>
                </div>
                <button 
                    className='modal-order__button-to-cart button button-primary'
                    onClick={() => onAddItem()}>
                    В корзину за {details[sizeName].price * itemsNumber}р.
                </button>
            </div>
        </div>
    );
}

class ModalOrder extends React.Component {

    state = {
        itemsNumber: 1,
        sizeName: 'sm'
    }

    changeNumber = (val) => {
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

    changeSize = (e) => {
        this.setState({
            sizeName: e.target.value
        })
    }

    onAddItem = () => {
        this.props.itemAddToCart(this.props.openedItemId, this.state.itemsNumber, this.state.sizeName)
        this.props.closeModal()
    }

    render() {
        const currentItem = concatObjectFields(this.props.dataItems).find(item => item.id === this.props.openedItemId);
        const { sizeName, itemsNumber } = this.state;

        return <ModalOrderView
            currentItem={currentItem}
            sizeName={sizeName}
            itemsNumber={itemsNumber}
            changeNumber={this.changeNumber}
            changeSize={this.changeSize}
            onAddItem={this.onAddItem}
        />
    }
}

const mapStateToProps = ({ dataItems, modal: { openedItemId } }) => ({ dataItems, openedItemId })

const mapDispatchToProps = { itemAddToCart, closeModal }

export default connect(mapStateToProps, mapDispatchToProps)(ModalOrder);