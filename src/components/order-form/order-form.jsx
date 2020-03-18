import React, { Component } from 'react';
import './order-form.scss';

export class OrderForm extends Component {

    state = {
        street: '',
        building: '',
        room: '',
        phoneNumber: '',
        
        orderPlaced: false,
        submitedForm: {
            submitedStreet: '',
            submitedBuilding: '',
            submitedRoom: '',
            submitedPhoneNumber: '',
        }
    }

    handleStreetChange = ({ target: { value } }) => { this.setState({ street: value }) }

    handleBuildingChange = ({ target: { value } }) => { this.setState({ building: value }) }

    handleRoomChange = ({ target: { value } }) => { this.setState({ room: value }) }

    handlePhoneNumberChange = ({ target: { value } }) => { this.setState({ phoneNumber: value }) }

    onSubmit = (e) => {
        e.preventDefault();
        const  { street, building, room, phoneNumber } = this.state;
        console.log(`Заказ на адрес: ул.: ${street}, дом: ${building}, квартира: ${room}. Телефон: ${phoneNumber}`)
        this.setState({
            street: '',
            building: '',
            room: '',
            phoneNumber: '',
            submitedForm: {
                submitedStreet: street,
                submitedBuilding: building,
                submitedRoom: room,
                submitedPhoneNumber: phoneNumber,
            },
            orderPlaced: true
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
                        <input type='text' className='input-text' value={building} onChange={this.handleBuildingChange} />
                    </label>

                    <label className="form-group col-12 col-md-6 col-lg-3">
                        Квартира:
                        <input type='text' className='input-text' value={room} onChange={this.handleRoomChange} />
                    </label>

                    <label className="form-group col-12 col-md-6 col-lg-3">
                        Телефон:
                        <input type='text' className='input-text' value={phoneNumber} onChange={this.handlePhoneNumberChange} />
                    </label>
                    <div className="col-12 text-center m-t-1">
                        <button type='submit' className='button button-primary' onClick={this.onSubmit}>Заказать</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default OrderForm;
