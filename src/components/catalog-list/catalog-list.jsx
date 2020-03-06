import React from 'react';
import MiniCard from '../mini-card';
import WithDataContext from '../HOC';
import { connect } from 'react-redux';

class CatalogList extends React.Component {

    componentDidMount() {
        this.props.dataServise.getData()
            .then(data => this.props.fetchData(data))
    }

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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (data) => {
            dispatch({
                type: 'DATA_LOADED',
                payload: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithDataContext(CatalogList));