import React from 'react';
import CatalogList from '../catalog-list';
import { connect } from 'react-redux';

const DrinksList = ({ visibleItems }) => <CatalogList data={visibleItems.drinks} minicardType='noBg' id="drinksList" />

const mapStateToProps = ({ visibleItems }) => ({ visibleItems })

export default connect(mapStateToProps)(DrinksList);