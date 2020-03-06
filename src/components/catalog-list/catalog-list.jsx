import React from 'react';
import MiniCard from '../mini-card';
import WithDataContext from '../HOC';
import { connect } from 'react-redux';

class CatalogList extends React.Component {

    render() {
        const list = this.props.dataItems.map(item => (
            <div className="col-12 mb-4" key={item.id}>
                <MiniCard title={item.title} author={item.author} price={item.price} coverImage={item.coverImage} />
            </div>
        ))
        return (
            <div className="catalog">
                <div className="row">
                    {list}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ dataItems }) => ({ dataItems })

export default connect(mapStateToProps)(WithDataContext(CatalogList));