import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../header';
import { PizzaPage, DrinksPage, CartPage, HomePage } from '../pages';
import { DataProvider } from '../data-service-context';
import DataService from '../../services/data-servise';
import { Provider } from 'react-redux';
import store from '../../store';
import Modal from '../modal';
import ModalOrder from '../modal-order';
import FixedCart from '../fixed-cart';

import './app.scss';

const dataServise = new DataService();

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <main>
                        <DataProvider value={dataServise}>
                            <div className="container">
                                <Route path='/' exact component={HomePage} />
                                <Route path='/pizza' component={PizzaPage} />
                                <Route path='/drinks' component={DrinksPage} />
                                <Route path='/cart' component={CartPage} />
                                <Route path='/(pizza|drinks|)' component={FixedCart} />
                            </div>
                        </DataProvider>
                    </main>
                </BrowserRouter>
                <Modal>
                    <ModalOrder />
                </Modal>
            </Provider>
        </div>
    );
}

export default App;
