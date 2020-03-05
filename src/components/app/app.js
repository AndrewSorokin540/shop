import React from 'react';
import Header from '../header';
import CatalogPage from '../pages';

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <CatalogPage />
            </div>
        </div>
    );
}

export default App;
