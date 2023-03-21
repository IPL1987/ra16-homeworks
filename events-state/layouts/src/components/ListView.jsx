import React from 'react';
import ShopItem from './ShopItem';

export default function ListView({ items }) {
  return <div className='product-list'>
    <table>
      <tbody>
        {items.map(item => <ShopItem key={`${item.name}-${item.color}`} {...item} />)}
      </tbody>
    </table>
  </div>
}