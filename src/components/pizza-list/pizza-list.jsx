import React from 'react';
import CatalogList from '../catalog-list';
import WithDataContext from '../HOC';

const PizzaList = ({dataServise: {getData}}) => {
    return (
        <CatalogList getData={getData} dataArray='pizza' minicardType='cuttingBoard' />
    );
}

export default WithDataContext(PizzaList);