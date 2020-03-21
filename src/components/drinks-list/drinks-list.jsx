import React from 'react';
import CatalogList from '../catalog-list';
import WithDataContext from '../HOC';

const DrinksList = ({dataServise: {getData}}) => {
    return (
        <CatalogList getData={getData} dataArray='drinks' minicardType='noBg' />
    );
}

export default WithDataContext(DrinksList);