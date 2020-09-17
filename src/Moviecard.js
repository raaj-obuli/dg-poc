import React from 'react';

function Moviecard(props) {
  return (
    <div className='moviecard'>
      <p>{props.name}</p>
      <img src={`./images/${props.poster}`} alt='' />
    </div>
  );
}

export default Moviecard;
