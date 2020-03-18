import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeOrder } from '../../actions';
import './order-form.scss';

export class OrderForm extends Component {

    state = {
        street: '',
        building: '',
        room: '',
        phoneNumber: ''
    }

    handleStreetChange = ({ target: { value } }) => { this.setState({ street: value }) }
    handleBuildingChange = ({ target: { value } }) => { this.setState({ building: value }) }
    handleRoomChange = ({ target: { value } }) => { this.setState({ room: value }) }
    handlePhoneNumberChange = ({ target: { value } }) => { this.setState({ phoneNumber: value }) }
    handleTimeNumberChange = ({ target: { value } }) => { this.setState({ time: value }) }

    onSubmit = (e) => {
        e.preventDefault();
        const { street, building, room, phoneNumber } = this.state;
        const { placeOrder } = this.props;

        placeOrder({
            orderPlaced: true,
            submitedStreet: street,
            submitedBuilding: building,
            submitedRoom: room,
            submitedPhoneNumber: phoneNumber
        })

        this.setState({
            street: '',
            building: '',
            room: '',
            phoneNumber: ''
        })
    }

    render() {

        let { street, building, room, phoneNumber, orderPlaced } = this.state;

        if (orderPlaced) {
            return <h2 className='m-t-6 text-center'>Спасибо за заказ!</h2>
        }
        return (
            <React.Fragment>
                <h2 className='m-t-6'>Ваш адрес</h2>
                <form className='order-form row'>
                    <label className="form-group col-12 col-md-6 col-lg-3">
                        Улица:
                        <input type='text' className='input-text' value={street} onChange={this.handleStreetChange} />
                    </label>

                    <label className="form-group col-12 col-md-6 col-lg-3">
                        Дом:
                        <input type='number' className='input-text' value={building} onChange={this.handleBuildingChange} />
                    </label>

                    <label className="form-group col-12 col-md-6 col-lg-3">
                        Квартира:
                        <input type='number' className='input-text' value={room} onChange={this.handleRoomChange} />
                    </label>

                    <label className="form-group col-12 col-md-6 col-lg-3">
                        Телефон:
                        <input type='tel' className='input-text' value={phoneNumber} onChange={this.handlePhoneNumberChange} />
                    </label>

                    <div className="col-12 text-center m-t-1">
                        <button type='submit' className='button button-primary' onClick={this.onSubmit}>Заказать</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = ({ placeOrder })

export default connect(null, mapDispatchToProps)(OrderForm);
