import React from 'react';

export default function ShopCard({ name, price, color, img }) {
  return <div className='shop-card'>
    <h2>{name}</h2>
    <h3>{color}</h3>
    <img src={img} alt='product' />
    <div className='price-btn'>
      <span>${price}</span>
      <button>Add to cart</button>
    </div>
  </div>
}