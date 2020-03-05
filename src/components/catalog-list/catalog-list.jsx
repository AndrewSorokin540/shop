import React from 'react';
import MiniCard from '../mini-card';
import WithDataContext from '../HOC';
import { connect } from 'react-redux';

class CatalogList extends React.Component {

    state = {
        loading: true,
        data: []
    }

    componentDidMount() {
        this.props.dataServise.getData()
            .then(data => {
                this.setState({ data });
            })
    }

    render() {
        const list = this.state.data.map(item => (
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

export default WithDataContext(CatalogList);