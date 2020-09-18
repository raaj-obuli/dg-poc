import * as actions from './actionTypes';

export function getMovieList(data) {
  const totalContentItems = parseInt(data['total-content-items']);
  const pageSizeReturned = parseInt(data['page-size-returned']);
  const movieList = data['content-items'].content;
  const pageNo = parseInt(data['page-num-requested']);

  return {
    type: actions.GET_MOVIE_LIST,
    title: data.title,
    payload: movieList,
    totalContentItems: totalContentItems,
    pageSizeReturned: pageSizeReturned,
    pageNo: pageNo,
  };
}

export function getSearchResult(search) {
  return {
    type: actions.GET_SEARCH_RESULT,
    payload: {
      search: search,
    },
  };
}
