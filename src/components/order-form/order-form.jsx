import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModalThanks } from '../../actions';
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
                validation: {
                    required: true,
                }
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
                    maxLength: 4
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
                    maxLength: 4
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
                    length: 11
                }
            },
        },
        formValid: false
    }

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <label key={index} className="col-12 col-md-6 col-lg-4 form-group">
                    {control.label}
                    <input
                        name={control.name}
                        type={control.type}
                        className='input-text'
                        value={control.value}
                        placeholder={control.placeholder}
                        onChange={e => this.handleInputChange(e)}
                    />
                    <span className='input__error-text'>{!control.valid && control.touched && 'Введите корректные данные'}</span>
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
        if (validation.maxLength) {
            isValid = value.length <= validation.maxLength && isValid
        }
        if (validation.length) {
            isValid = value.length === validation.length && isValid
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

        const newFormControlsValids = Object.keys(newFormControls).map(key => newFormControls[key].valid)

        const formValid = newFormControlsValids.every(validValue => validValue === true)

        this.setState({
            formControls: newFormControls,
            formValid
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.openModalThanks()
        this.setState({
            street: '',
            building: '',
            room: '',
            phoneNumber: ''
        })
    }

    onCheck = (e) => {
        e.preventDefault();
        console.log(
            Object.keys(this.state.formControls).map(key => {
                return `${this.state.formControls[key].name}: ${this.state.formControls[key].valid}`
            })
        )
    }

    render() {
        const { formValid } = this.state;
        const btnClassNames = `button button-primary ${formValid ? '' : 'disabled'}`
        return (
            <React.Fragment>
                <h2 className='m-t-6'>Детали заказа</h2>
                <form className='order-form row'>
                    {this.renderInputs()}

                    <div className="col-12 text-center m-t-1">
                        <button disabled={!formValid} type='submit' className={btnClassNames} onClick={this.onSubmit}>Заказать</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = ({ openModalThanks })

export default connect(null, mapDispatchToProps)(OrderForm);
