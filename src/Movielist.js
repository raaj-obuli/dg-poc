import React from 'react';
import { useSelector } from 'react-redux';
import Moviecard from './Moviecard';

function Movielist() {
  const movielist = useSelector((state) => state.movielist);
  let movielistItems = movielist?.page['content-items'].content;

  return (
    <div className='movielist'>
      <div className='sticky top-0 pb-4 pt-6 bg-black'>
        <span className='inline-block align-bottom'>
          {movielist?.page.title}
        </span>
        <span>SEARCH</span>
      </div>
      {/* <div className=' movielist flex flex-wrap'> */}
      <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4 gap-y-10'>
        {movielistItems &&
          movielistItems.map((item, i) => (
            <Moviecard key={i} name={item.name} poster={item['poster-image']} />
          ))}
      </div>
    </div>
  );
}

export default Movielist;
