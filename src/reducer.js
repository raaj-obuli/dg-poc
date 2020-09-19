import * as actions from './actions/actionTypes';

const initialState = {
  movielist: [],
  pageSizeReturned: null,
  hasMore: true,
  pageNo: 0,
  totalContentItems: null,
  title: '',
  search: '',
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
    case actions.SEARCH:
      return { ...state, search: action.search };
    default:
      return state;
  }
}
