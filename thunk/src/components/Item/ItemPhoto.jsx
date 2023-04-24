import React from "react";
function ItemPhoto( {url} ) {

  return (
    <li className="item-photo">
      <img className="photo_mini" src={url} alt="Фото" />
    </li>
  )
}
  
export default ItemPhoto;