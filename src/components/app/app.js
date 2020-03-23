import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { DataProvider } from '../data-service-context';
import { CartPage, HomePage } from '../pages';
import ErrorBoundary from '../error-boundary';
import store from '../../store';
import DataService from '../../services/data-servise';
import Header from '../header';
import Modal from '../modal';
import FixedCart from '../fixed-cart';
import './app.scss';

const dataServise = new DataService();

const App = () => (
    <Provider store={store}>
        <HashRouter basename='/shop'>
            <ErrorBoundary>
                <Header />
                <main>
                    <DataProvider value={dataServise}>
                        <div className="container">
                            <Route path='/' exact component={HomePage} />
                            <Route path='/cart' component={CartPage} />
                            <Route path='/' exact component={FixedCart} />
                        </div>
                    </DataProvider>
                </main>
            </ErrorBoundary>
        </HashRouter>
        <Modal />
    </Provider>
)

export default App;
