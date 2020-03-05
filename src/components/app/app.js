import React from 'react';
import Header from '../header';
import CatalogPage from '../pages';
import { DataProvider } from '../data-service-context';
import DataService from '../../services/data-servise';
import { Provider } from 'react-redux';
import store from '../../store';

const dataServise = new DataService();

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Header />
                <DataProvider value={dataServise}>
                    <div className="container">
                        <CatalogPage />
                    </div>
                </DataProvider>
            </Provider>

        </div>
    );
}

export default App;
