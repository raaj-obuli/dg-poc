import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../fetch';
import './Search.css';

class Search extends Component {
  onClick() {
    console.log('HERE');
  }
  render() {
    const { search, value } = this.props;

    return (
      <div className='flex-1 text-right text-gray-600 relative'>
        <input
          id='search'
          name='search'
          type='text'
          placeholder='search'
          onChange={(e) => search(e.target.value)}
          value={value}
          className='focus:outline-none'
        />
        <input
          className='w-4'
          id='search_submit'
          src='https://www.iconsdb.com/icons/preview/white/search-13-xxl.png'
          value='Search'
          type='image'
          alt='search'
        />
        {/* <input id='search_submit' value='Search' type='submit' /> */}
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
