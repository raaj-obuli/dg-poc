import React from 'react';
import './App.css';
import { getMovieList, getSearchResult } from './actions';
import Movielist from './Movielist';

import store from './store';

function App() {
  store.subscribe(() => console.log(store.getState()));

  //Load from local json and store the data
  fetch('./data/page1.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      store.dispatch(getMovieList(data));
    })
    .catch((err) => {
      console.log('Error Reading data ' + err);
    });

  return (
    <div className='container bg-black text-white'>
      <Movielist />
    </div>
  );
}

export default App;
