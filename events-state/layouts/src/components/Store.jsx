import React, { useState } from "react";
import CardsView from './CardsView'
import ListView from './ListView'
import IconSwitch from './IconSwitch';

export default function Store({ products }) {
  const [icon, setIcon] = useState('viev_list')

  const onSwitch = () => {
    setIcon((prevIcon) => {
      return prevIcon === "view_list" ? "view_module" : "view_list";
    });
  }

  return <div className='store'>
    <IconSwitch icon={icon} onSwitch={onSwitch} />
    {icon === "view_list" && <CardsView cards={products} />}
    {icon === "view_module" && <ListView items={products} />}
  </div>
}