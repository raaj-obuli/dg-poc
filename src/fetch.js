import { getMovieList, getSearchResult } from './actions';
import store from './store';

export function fetchMovies(page) {
  console.log('page in fetchMovies ===>', page);
  return (dispatch) => {
    fetch(`./data/${page}.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log('data ===>', data.page['content-items']);
        store.dispatch(getMovieList(data.page));
      })
      .catch((err) => {
        console.log('Error Reading data ' + err);
      });
  };
}

//   fetch('./data/page1.json')
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log('data ===>', data.page['content-items']);
//       store.dispatch(getMovieList(data.page['content-items'].content));
//     })
//     .catch((err) => {
//       console.log('Error Reading data ' + err);
//     });
// }
