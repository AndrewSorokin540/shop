import React from 'react';
import MiniCard from '../mini-card';
import WithDataContext from '../HOC';
import { connect } from 'react-redux';
import { dataLoaded } from '../../actions';
import './catalog-list.scss';

class CatalogList extends React.Component {

    componentDidMount() {
        this.props.dataServise.getData()
            .then(data => this.props.dataLoaded(data))
    }

    render() {
        const list = this.props.dataItems.map(item => (
            <div className="col-12 col-sm-6 col-md-4 catalog-item" key={item.id}>
                <MiniCard {...item} />
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

const mapDispatchToProps = { dataLoaded }

export default connect(mapStateToProps, mapDispatchToProps)(WithDataContext(CatalogList));