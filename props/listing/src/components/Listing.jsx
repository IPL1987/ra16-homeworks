import React from 'react';
import Items from './Items';

export default function Listing ({ items=[] }) {
  return (
    <div className='item-list'>
      {items.map(item => (<Items item={item} key={Math.random()} />))}
    </div>
  );
};
