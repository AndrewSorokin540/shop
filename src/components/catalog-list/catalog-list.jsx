import React from 'react';
import MiniCard from '../mini-card';
import './catalog-list.scss';

const CatalogListView = ({ data, minicardType, id }) => (
    <div className="catalog">
        <div id={id} className='catalog__anchor'></div>
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

const CatalogList = ({ data, minicardType, id }) => {

    if (!data) {
        return <CatalogListView data={[]} minicardType={minicardType} id={id} />
    }

    return (
        <CatalogListView data={data} minicardType={minicardType} id={id} />
    )
}

export default CatalogList;