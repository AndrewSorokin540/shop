import React from 'react';
import CatalogList from '../catalog-list';
import WithDataContext from '../HOC';

const PizzaPage = ({dataServise: {getPizza}}) => {
    return (
        <CatalogList getData={getPizza} />
    );
}

export default WithDataContext(PizzaPage);