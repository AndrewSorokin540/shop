import React from 'react';
import CatalogList from '../catalog-list';
import { connect } from 'react-redux';


const pizzaListView = ({ pizza }) => <CatalogList data={pizza} minicardType='cuttingBoard' id='PizzaList' />
const mapStateToPizzaProps = ({ visibleItems: {pizza} }) => ({ pizza })
const PizzaList = connect(mapStateToPizzaProps)(pizzaListView)


const drinksListView = ({ drinks }) => <CatalogList data={drinks} minicardType='noBg' id="drinksList" />
const mapStateToDrinksProps = ({ visibleItems: {drinks} }) => ({ drinks })
const DrinksList = connect(mapStateToDrinksProps)(drinksListView)


export { PizzaList, DrinksList };