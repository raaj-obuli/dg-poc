import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazilyLoadedImage = ({ src, alt }) => (
  <div className='xl:h-64 xl:overflow-hidden'>
    <LazyLoadImage alt={alt} src={src} effect='blur' />
  </div>
);

export default LazilyLoadedImage;
