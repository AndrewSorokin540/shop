import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions';
import ModalOrder from '../modal-order';
import OrderSent from '../order-sent';
import { clearCart } from '../../actions';
import './modal.scss';

const Modal = ({ isModalOpen, modalOpenType, closeModal, clearCart }) => {

    const onClose = () => {
        closeModal()

        if (modalOpenType === 'thanks-modal') {
            clearCart()
        }
    }

    if (!isModalOpen) {
        return null
    }
    return (
        <div className='modal'>
            <div className="modal-content">
                <div className="modal-header">
                    <button className='modal-close' onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    {modalOpenType === 'product-modal' && <ModalOrder />}
                    {modalOpenType === 'thanks-modal' && <OrderSent />}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ modal: { isModalOpen, modalOpenType } }) => ({ isModalOpen, modalOpenType })

const mapDispatchToProps = { closeModal, clearCart }

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
