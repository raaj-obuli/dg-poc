import * as actions from './actionTypes';

export function getMovieList(movielist) {
  return {
    type: actions.GET_MOVIE_LIST,
    payload: {
      movielist: movielist,
    },
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
