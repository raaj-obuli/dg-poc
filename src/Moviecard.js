import React from 'react';
import LazilyLoadedImage from './LazyLoadImage';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Moviecard(props) {
  return (
    //<div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/8 pr-4'>

    <div className='movielist__wrapper'>
      <LazilyLoadedImage width={185} src={`./images/${props.poster}`} />
      <img className='pb-2' alt='' />
      <h4 className='text-sm'>{props.name}</h4>
    </div>
  );
}

export default Moviecard;
