import React from 'react';

export default function ShopItem({ name, price, color, img }) {
  return <tr className='shop-item'>
    <td>
      <img src={img} alt='' />
    </td>
    <td>
      <h3>{name}</h3>
    </td>
    <td>
      <h5>{color}</h5>
    </td>
    <td>
      <span>${price}</span>
    </td>
    <td>
      <button>Add to cart</button>
    </td>
  </tr>
}