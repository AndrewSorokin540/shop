import React from 'react';
import MiniCard from '../mini-card';
import { connect } from 'react-redux';
import { dataLoaded } from '../../actions';
import './catalog-list.scss';

class CatalogList extends React.Component {

    componentDidMount() {
        this.props.getData()
            .then(data => this.props.dataLoaded(data))
    }

    render() {
        if (!this.props.dataItems) {
            return (
                <div className="catalog">
                    <div className="row">
                        Loading...
                    </div>
                </div>
            )
        }
        const list = this.props.dataItems.map(item => (
            <div className="col-12 col-sm-6 col-md-4 catalog-item" key={item.id}>
                <MiniCard {...item} minicardType={this.props.minicardType} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CatalogList);