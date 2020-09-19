import React from 'react';
import { connect } from 'react-redux';
import Moviecard from './Moviecard';
import { fetchMovies } from '../fetch';
import InfiniteScroll from 'react-infinite-scroller';

import Header from './Header';

class Movielist extends React.Component {
  loadMore = () => {
    return this.props.hasMore ? true : false;
  };

  filterMovies = () => {
    let filteredMovies = this.props.movielist.filter((movie) =>
      movie.name.toLowerCase().includes(this.props.search.toLowerCase())
    );
    return filteredMovies;
  };

  render() {
    return (
      <div className='movielist pb-16'>
        <div className='sticky top-0 pb-4 pt-6 bg-black z-10'>
          <Header title={this.props.title} search={this.props.search} />
        </div>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.props.fetch}
          initialLoad={true}
          hasMore={this.loadMore()}
          loader={
            <div className='loader' key={0} style={{ textAlign: 'center' }}>
              <img
                className='m-auto mt-16'
                src='https://cdn.themis-media.com/media/global/images/library/deriv/1291/1291107.gif'
                alt='Loading ...'
              />
            </div>
          }
        >
          <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4 gap-y-10'>
            {this.props.search
              ? this.filterMovies().map((item, i) => (
                  <Moviecard
                    key={i}
                    name={item.name}
                    poster={item['poster-image']}
                  />
                ))
              : this.props.movielist.map((item, i) => (
                  <Moviecard
                    key={i}
                    name={item.name}
                    poster={item['poster-image']}
                  />
                ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movielist: state.movielist,
    pageSizeReturned: state.pageSizeReturned,
    hasMore: state.hasMore,
    pageNo: state.pageNo,
    title: state.title,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (page) => dispatch(fetchMovies(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movielist);
