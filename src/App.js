import React from 'react';
import './App.css';
import { getMovieList, getSearchResult } from './actions';
import Movielist from './Movielist';

import store from './store';

function App() {
  //store.subscribe(() => console.log(store.getState()));

  //Load from local json and store the data

  return (
    <div className='container bg-black text-white pr-4 pl-4'>
      <Movielist />
    </div>
  );
}

export default App;
