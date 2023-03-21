import React from 'react';

export default function IconSwitch({ icon, onSwitch }) {
  return (
    <span className="material-icons-round" onClick={onSwitch}>
      {icon}
    </span>
  );
}