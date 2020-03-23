import React from 'react';
import WithDataContext from '../HOC';
import DiscountsSlider from '../discounts-slider';
import Search from '../search';
import { PizzaList, DrinksList } from '../lists';
import Loader from '../loader';
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
        const dataLoaded = Object.keys(this.props.visibleItems).length > 0;
        return (
            <React.Fragment>
                <DiscountsSlider />
                <Search />
                {
                    dataLoaded ?
                        <>
                            <PizzaList />
                            <DrinksList />
                        </>
                        :
                        <Loader />
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ visibleItems }) => ({ visibleItems })

const mapDispatchToProps = { dataLoaded }

export default connect(mapStateToProps, mapDispatchToProps)(WithDataContext(HomePage));
