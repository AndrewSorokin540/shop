import React from 'react';
import MiniCard from '../mini-card';
import './catalog-list.scss';

const CatalogListView = ({ data, minicardType }) => (
    <div className="catalog">
        <div className="row">
            {
                data.map(item => (
                    <div className="col-12 col-sm-6 col-md-4 catalog-item" key={item.id}>
                        <MiniCard {...item} minicardType={minicardType} />
                    </div>
                ))
            }
        </div>
    </div>
)

const CatalogList = ({ data, minicardType }) => {

    if (!data) {
        return <CatalogListView data={[]} minicardType={minicardType} />
    }

    return (
        <CatalogListView data={data} minicardType={minicardType} />
    )
}

export default CatalogList;