import React from 'react';
import WithDataContext from '../HOC';
import CatalogList from '../catalog-list';
import DiscountsSlider from '../discounts-slider';
import { connect } from 'react-redux';
import { dataLoaded } from '../../actions';

class HomePage extends React.Component {

    componentDidMount() {
        this.props.dataServise.getData()
            .then(data => {
                this.props.dataLoaded(data)
            })
    }

    render() {
        return (
            <React.Fragment>
                <DiscountsSlider />
                <CatalogList data={this.props.visibleItems.pizza} minicardType='cuttingBoard' />
                <CatalogList data={this.props.visibleItems.drinks} minicardType='noBg' />
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ visibleItems }) => ({ visibleItems })

const mapDispatchToProps = { dataLoaded }

export default connect(mapStateToProps, mapDispatchToProps)(WithDataContext(HomePage));
