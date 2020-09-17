import React from 'react';
import { useSelector } from 'react-redux';
import Moviecard from './Moviecard';

function Movielist() {
  const movielist = useSelector((state) => state.movielist);
  let movielistItems = movielist?.page['content-items'].content;

  return (
    <div className='movielist'>
      <div className='navbar'>
        {movielist?.page.title}
        SEARCH
      </div>
      <div class=' movielist flex flex-wrap'>
        {movielistItems &&
          movielistItems.map((item, i) => (
            <Moviecard key={i} name={item.name} poster={item['poster-image']} />
          ))}
      </div>
    </div>
  );
}

export default Movielist;
