import * as actions from './actionTypes';

export function getMovieList(data) {
  let totalContentItems = parseInt(data['total-content-items']);
  let pageSizeReturned = parseInt(data['page-size-returned']);

  return {
    type: actions.GET_MOVIE_LIST,
    payload: data['content-items'].content,
    totalContentItems: totalContentItems,
    pageSizeReturned: pageSizeReturned,
    pageNo: parseInt(data['page-num-requested']),
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
