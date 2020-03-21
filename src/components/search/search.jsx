import React from 'react';
import { connect } from 'react-redux';
import { onSearch } from '../../actions';
import './search.scss';


const Search = ({ onSearch }) => {
    return (
        <div className='search m-b-1 m-t-1'>
            <input className='search-input' type="search" placeholder='Найти продукт из списка' onChange={(e) => onSearch(e.target.value)} />
        </div>
    );
}

const mapDispatchToProps = { onSearch }

export default connect(null, mapDispatchToProps)(Search);