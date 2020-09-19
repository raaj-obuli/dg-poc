import React from 'react';
import Search from './Search';
export default function Header(props) {
  return (
    <div className='flex'>
      <div className='flex-1 pt-2 text-lg'>
        <h1>{props.title}</h1>
      </div>
      <Search />
    </div>
  );
}
