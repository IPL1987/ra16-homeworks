import React from 'react';
import ShopCard from './ShopCard';

export default function CardsView({ cards }) {
  return <div className='product-cards'>
    {cards.map(card => <ShopCard key={`${card.name}-${card.color}`} {...card} />)}
  </div>
}