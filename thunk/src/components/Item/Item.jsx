import React from "react";
function Item( {text, num} ) {

  return (
    <li className="item">{num}. {text};</li>
  )
}

export default Item;