import React, { useState } from 'react';

const menuList = [
  'Profile Information',
  'Change Password',
  'Become PRO',
  'Help',
  'Log Out'
];

export default function DropdownList() {
  const [active, setActive] = useState(0)
  const selectItem = (event) => {
    setActive(prev => menuList.indexOf(event.target.innerText));
  }

  const style = {
    color: "#5380F7",
  }

  return (
    <ul data-id="dropdown" className="dropdown">
      {menuList.map((item) => {
        return (
          <li key={item} style={item === menuList[active] ? style : null}>
            <a href="#item" onClick={selectItem}>{item}</a>
          </li>
        );
      })}
    </ul>
  );
}