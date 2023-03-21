import React, { useState } from 'react';
import DropdownList from "./dropdownList";

export default function Dropdown() {

  const [openClass, changeClass] = useState(' open')
  const toggle = () => {
    changeClass(prev => prev === ' open' ? '' : ' open');
  }

  return (
    <div className="container">
      <div data-id="wrapper" className={"dropdown-wrapper" + openClass}>
        <button data-id="toggle" className="btn" onClick={toggle}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>      
        <DropdownList />
      </div>
    </div>
  );
}