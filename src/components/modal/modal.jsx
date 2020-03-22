import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions';
import ModalOrder from '../modal-order';
import OrderSent from '../order-sent';
import './modal.scss';

class Modal extends React.Component {
    
    render() {
        const {isModalOpen, modalOpenType} = this.props;

        if (!isModalOpen) {
            return null
        }
        return (
            <div className='modal'>
                <div className="modal-content">
                    <div className="modal-header">
                        <button className='modal-close' onClick={this.props.closeModal}>&times;</button>
                    </div>
                    <div className="modal-body">
                        {modalOpenType === 'product-modal' && <ModalOrder />}
                        {modalOpenType === 'thanks-modal' && <OrderSent /> }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ modal: { isModalOpen, modalOpenType } }) => ({ isModalOpen, modalOpenType })

const mapDispatchToProps = { closeModal }

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
