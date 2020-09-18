import { getMovieList, getSearchResult } from './actions/actions';
import store from './store';

export function fetchMovies(page) {
  return (dispatch) => {
    fetch(`./data/${page}.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        store.dispatch(getMovieList(data.page));
      })
      .catch((err) => {
        console.log('Error Reading data ' + err);
      });
  };
}
