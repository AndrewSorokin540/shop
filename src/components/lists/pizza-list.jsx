import React from 'react';
import CatalogList from '../catalog-list';
import { connect } from 'react-redux';

const PizzaList = ({ visibleItems }) => <CatalogList data={visibleItems.pizza} minicardType='cuttingBoard' id='PizzaList' />

const mapStateToProps = ({ visibleItems }) => ({ visibleItems })

export default connect(mapStateToProps)(PizzaList);