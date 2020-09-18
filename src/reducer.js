import * as actions from './actionTypes';

const initialState = {
  movielist: [],
  pageSizeReturned: null,
  hasMore: true,
  pageNo: 0,
  totalContentItems: null,
  title: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MOVIE_LIST:
      return {
        ...state,
        movielist: state.movielist.concat(action.payload),
        pageSizeReturned: state.pageSizeReturned + action.pageSizeReturned,
        totalContentItems: action.totalContentItems,
        hasMore:
          action.totalContentItems -
          (state.pageSizeReturned + action.pageSizeReturned)
            ? true
            : false,
        pageNo: action.pageNo,
        title: action.title,
      };
    case actions.GET_SEARCH_RESULT:
      return { ...state, search: action.payload.search };
    default:
      return state;
  }
}
