import * as actions from './actionTypes';

export default function reducer(state = {}, action) {
  console.log('action ->', action);
  switch (action.type) {
    case actions.GET_MOVIE_LIST:
      return { ...state, movielist: action.payload.movielist };
    case actions.GET_SEARCH_RESULT:
      return { ...state, search: action.payload.search };
    default:
      return state;
  }
}
