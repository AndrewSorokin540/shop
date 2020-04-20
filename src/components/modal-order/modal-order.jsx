import React, { useState } from 'react';
import { connect } from 'react-redux';
import { itemAddToCart, closeModal } from '../../actions';
import { sizeNameToRus, concatObjectFields } from '../../utils';
import './modal-order.scss';

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

const ModalOrder = ({ dataItems, openedItemId, itemAddToCart, closeModal }) => {

    const [itemsNumber, setItemsNumber] = useState(1)
    const [sizeName, setSizeName] = useState('sm')

    const changeNumber = (val) => {
        if (val === 'inc') {
            setItemsNumber((itemsNumber) => itemsNumber + 1)
        }
        if (val === 'dec') {
            if (itemsNumber > 1) {
                setItemsNumber((itemsNumber) => itemsNumber - 1)
            }
        }
    }

    const changeSize = (e) => {
        setSizeName(e.target.value)
    }

    const onAddItem = () => {
        itemAddToCart(openedItemId, itemsNumber, sizeName)
        closeModal()
    }

    const currentItem = concatObjectFields(dataItems).find(item => item.id === openedItemId);

    return <ModalOrderView
        currentItem={currentItem}
        sizeName={sizeName}
        itemsNumber={itemsNumber}
        changeNumber={changeNumber}
        changeSize={changeSize}
        onAddItem={onAddItem}
    />
}

const mapStateToProps = ({ dataItems, modal: { openedItemId } }) => ({ dataItems, openedItemId })

const mapDispatchToProps = { itemAddToCart, closeModal }

export default connect(mapStateToProps, mapDispatchToProps)(ModalOrder);