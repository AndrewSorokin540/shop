import React from 'react';
import CatalogList from '../catalog-list';
import WithDataContext from '../HOC';

const PizzaPage = ({dataServise: {getDrinks}}) => {
    return (
        <CatalogList getData={getDrinks} minicardType='noBg' />
    );
}

export default WithDataContext(PizzaPage);