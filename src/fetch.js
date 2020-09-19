import { getMovieList, getSearch } from './actions/actions';
import store from './store';

export function fetchMovies(page) {
  return (dispatch) => {
    fetch(`./data/${page}.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          store.dispatch(getMovieList(data.page));
        }, 300); //faking a loading time
      })
      .catch((err) => {
        console.log('Error Reading data ' + err);
      });
  };
}

export function fetchSearch(key) {
  return store.dispatch(getSearch(key));
}
