import React from 'react';
import sizeNameToRus from '../../utils';
import './order-table.scss';

const OrderTable = ({ cart, itemRemoveFromCart, allItemsRemoveFromCart, itemAddToCart }) => (
    <table className="order-table">
        <tbody>
            {cart.order.map((item, index) => {
                const { id, title, count, size } = item;
                return (
                    <tr key={index}>
                        <td>{title} ({sizeNameToRus(size)})</td>
                        <td className='text-center'>{count} шт.</td>
                        <td className='order-table__td-button'><button className='button button-primary' onClick={() => itemRemoveFromCart(id, size)}>-</button></td>
                        <td className='order-table__td-button'><button className='button button-primary' onClick={() => allItemsRemoveFromCart(id, size)}>Удалить все</button></td>
                        <td className='order-table__td-button'><button className='button button-primary' onClick={() => itemAddToCart(id, 1, size)}>+</button></td>
                    </tr>
                )
            })}
            <tr>
                <td colSpan='2'>Итого:</td>
                <td colSpan='3' className='text-center'>{cart.total} руб.</td>
            </tr>
        </tbody>
    </table>
)

export default OrderTable;