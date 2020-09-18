import React from 'react';
import { connect } from 'react-redux';
import Moviecard from './Moviecard';
import { fetchMovies } from '../fetch';
import InfiniteScroll from 'react-infinite-scroller';

class Movielist extends React.Component {
  loadMore() {
    return this.props.hasMore ? true : false;
  }

  render() {
    return (
      <div className='movielist pb-16'>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.props.fetch}
          initialLoad={true}
          hasMore={this.loadMore()}
          loader={
            <div className='loader' style={{ textAlign: 'center' }} key={0}>
              Loading ...
            </div>
          }
        >
          <div className='sticky top-0 pb-4 pt-6 bg-black z-10'>
            <span className='inline-block align-bottom'>
              {this.props.title}
            </span>
            <span>SEARCH</span>
          </div>
          <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4 gap-y-10'>
            {this.props.movielist.map((item, i) => (
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (page) => dispatch(fetchMovies(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movielist);
