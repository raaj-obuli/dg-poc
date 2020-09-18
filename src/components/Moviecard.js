import React from 'react';
import LazilyLoadedImage from './LazyLoadImage';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Moviecard(props) {
  const placeholderPosterPath = './images/placeholder_for_missing_posters.png';
  const posterPath = `./images/${props.poster}`;
  const poster =
    props.poster && props.poster !== 'posterthatismissing.jpg'
      ? posterPath
      : placeholderPosterPath;

  return (
    <div className='movielist__wrapper'>
      <LazilyLoadedImage src={poster} />
      <img className='pb-2' alt='' />
      <h4 className='text-sm'>{props.name}</h4>
    </div>
  );
}

export default Moviecard;
