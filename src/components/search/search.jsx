import React from 'react';
import { connect } from 'react-redux';
import { onSearch } from '../../actions';
import './search.scss';


const Search = ({ onSearch }) => {
    return (
        <input className='search-input' type="text" placeholder='Найти продукт из списка' onChange={(e) => onSearch(e.target.value)} />
    );
}

const mapDispatchToProps = { onSearch }

export default connect(null, mapDispatchToProps)(Search);