import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../fetch';
import './Search.css';

class Search extends Component {
  render() {
    const { search, value } = this.props;

    return (
      <div className='searchBox flex-1 text-right text-gray-600 relative'>
        <div className='flex'>
          <div className='flex-1 '>
            <input
              id='search'
              name='search'
              type='text'
              placeholder='search'
              onChange={(e) => search(e.target.value)}
              value={value}
              className='focus:outline-none'
              onBlur={() => search('')}
            />
          </div>
          <div className='flex-1 '>
            <img
              src='https://www.iconsdb.com/icons/preview/white/search-13-xxl.png'
              alt=''
              className='searchIcon'
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (key) => dispatch(fetchSearch(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
