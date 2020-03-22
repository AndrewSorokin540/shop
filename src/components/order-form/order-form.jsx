import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeOrder, openModalThanks } from '../../actions';
import './order-form.scss';


export class OrderForm extends Component {

    state = {
        formControls: {
            userName: {
                value: '',
                name: 'userName',
                type: 'text',
                label: 'Имя',
                placeholder: 'напр.: Иван',
                valid: true,
                touched: false
            },
            personsNumber: {
                value: '',
                name: 'personsNumber',
                type: 'number',
                label: 'Количество персон',
                placeholder: 'напр.: 2',
                valid: false,
                touched: false,
            },
            street: {
                value: '',
                name: 'street',
                type: 'text',
                label: 'Улица',
                placeholder: 'напр.: Ленина',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            },
            building: {
                value: '',
                name: 'building',
                type: 'text',
                label: 'Дом',
                placeholder: 'напр.: 50а',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            },
            room: {
                value: '',
                name: 'room',
                type: 'number',
                label: 'Квартира',
                placeholder: 'напр.: 42',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            },
            phone: {
                value: '',
                name: 'phone',
                type: 'tel',
                label: 'Номер телефона',
                placeholder: 'напр.: 8-555-55-55',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            },
        }
    }

    renderInputs = () => {
        let focusedElement = document.activeElement;
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            const controlIsFocused = focusedElement.name === control.name;
            return (
                <label key={index} className="col-12 col-md-6 col-lg-3 m-b-1 form-group">
                    {control.label}
                    <input
                        name={control.name}
                        type={control.type}
                        className='input-text'
                        value={control.value}
                        placeholder={control.placeholder}
                        onChange={e => this.handleInputChange(e)}
                    />
                    {!control.valid && control.touched && !controlIsFocused && 'Данные введены некорректно'}
                </label>
            )
        })
    }

    validateControl(value, validation) {
        let isValid = true;

        if (!validation) {
            return true
        }
        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid;
    }

    handleInputChange = (e) => {
        const newFormControls = {
            ...this.state.formControls,
            [e.target.name]: {
                ...this.state.formControls[e.target.name],
                touched: true,
                valid: this.validateControl(e.target.value, this.state.formControls[e.target.name].validation),
                value: [e.target.value]
            }
        }
        this.setState({
            formControls: newFormControls
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { street, building, room, phoneNumber } = this.state;
        const { placeOrder } = this.props;

        // placeOrder({
        //     orderPlaced: true,
        //     submitedStreet: street,
        //     submitedBuilding: building,
        //     submitedRoom: room,
        //     submitedPhoneNumber: phoneNumber
        // })

        this.props.openModalThanks()

        this.setState({
            street: '',
            building: '',
            room: '',
            phoneNumber: ''
        })

    }

    render() {
        return (
            <React.Fragment>
                <h2 className='m-t-6'>Детали заказа</h2>
                <form action='telegram.php' method='POST' className='order-form row'>
                    {this.renderInputs()}

                    <div className="col-12 text-center m-t-1">
                        <button type='submit' className='button button-primary' onClick={this.onSubmit}>Заказать</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = ({ placeOrder, openModalThanks })

export default connect(null, mapDispatchToProps)(OrderForm);
