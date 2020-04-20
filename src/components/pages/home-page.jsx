import React, { useEffect } from 'react';
import WithDataContext from '../HOC';
import DiscountsSlider from '../discounts-slider';
import Search from '../search';
import { PizzaList, DrinksList } from '../lists';
import Loader from '../loader';
import { connect } from 'react-redux';
import { dataLoaded } from '../../actions';

const HomePage = ({ visibleItems, dataLoaded, dataServise }) => {

    useEffect(() => {
        dataServise.getData()
            .then(data => {
                dataLoaded(data)
            })
    }, [])

    const lodaingDone = Object.keys(visibleItems).length > 0;
    return (
        <React.Fragment>
            <DiscountsSlider />
            <Search />
            {
                lodaingDone ?
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

const mapStateToProps = ({ visibleItems }) => ({ visibleItems })

const mapDispatchToProps = { dataLoaded }

export default connect(mapStateToProps, mapDispatchToProps)(WithDataContext(HomePage));
