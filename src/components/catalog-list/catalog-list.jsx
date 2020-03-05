import React from 'react';
import MiniCard from '../mini-card';

const CatalogList = () => {
    return (
        <div className="catalog">
            <div className="row">
                <div className="col-4 mb-4">
                    <MiniCard />
                </div>
                <div className="col-4 mb-4">
                    <MiniCard />
                </div>
                <div className="col-4 mb-4">
                    <MiniCard />
                </div>
                <div className="col-4 mb-4">
                    <MiniCard />
                </div>
                <div className="col-4 mb-4">
                    <MiniCard />
                </div>
                <div className="col-4 mb-4">
                    <MiniCard />
                </div>
            </div>
        </div>
    );
}

export default CatalogList