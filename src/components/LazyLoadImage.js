import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazilyLoadedImage = ({ src }) => (
  <div>
    <LazyLoadImage alt='' src={src} effect='blur' />
  </div>
);

export default LazilyLoadedImage;
