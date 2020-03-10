import React from 'react';
import Header from '../header';
import { CatalogPage, CartPage } from '../pages';
import { DataProvider } from '../data-service-context';
import DataService from '../../services/data-servise';
import { Provider } from 'react-redux';
import store from '../../store';
import Modal from '../modal';
import ModalOrder from '../modal-order';

const dataServise = new DataService();

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Header />
                <main>
                    <DataProvider value={dataServise}>
                        <div className="container">
                            <CatalogPage />
                            <CartPage />
                        </div>
                    </DataProvider>
                </main>
                <Modal>
                    <ModalOrder />
                </Modal>
            </Provider>
        </div>
    );
}

export default App;
