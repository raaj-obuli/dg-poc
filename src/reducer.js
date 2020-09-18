import * as actions from './actionTypes';

const initialState = {
  movielist: [],
  pageSizeReturned: null,
  hasMore: false,
  pageNo: 0,
  totalContentItems: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MOVIE_LIST:
      return {
        ...state,
        movielist: state.movielist.concat(action.payload),
        pageSizeReturned: action.pageSizeReturned,
        totalContentItems: action.totalContentItems,
        hasMore:
          action.totalContentItems - action.pageSizeReturned ? true : false,
        pageNo: state.pageNo + action.pageNo,
      };
    case actions.GET_SEARCH_RESULT:
      return { ...state, search: action.payload.search };
    default:
      return state;
  }
}
