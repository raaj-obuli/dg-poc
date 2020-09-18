import React from 'react';
import { useSelector, connect } from 'react-redux';
import Moviecard from './Moviecard';
import { fetchMovies } from './fetch';
import InfiniteScroll from 'react-infinite-scroller';
import store from './store';

//const movielist = useSelector((state) => state.movielist);
class Movielist extends React.Component {
  //let movielistItems = movielist?.content;
  loadMore() {
    // console.log('pageSizeReturned ? ', this.props.hasMore);
    console.log('pageNo ? ', this.props.pageNo);
    console.log('hasMore ? ', this.props.hasMore);
    if (this.props.pageNo > 0 && this.props.hasMore === false) {
      return false;
    } else {
      return true;
    }

    //if (this.props.hasMore >= 20) return true;
  }

  render() {
    return (
      <div className='movielist'>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.props.fetch}
          hasMore={this.loadMore()}
          loader={
            <div className='loader' style={{ textAlign: 'center' }} key={0}>
              Loading ...
            </div>
          }
        >
          <div className='sticky top-0 pb-4 pt-6 bg-black'>
            <span className='inline-block align-bottom'>
              {/* {movielist?.page.title} */}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    fetch: (page) => dispatch(fetchMovies(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movielist);
