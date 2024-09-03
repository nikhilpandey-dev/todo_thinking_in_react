import React from 'react';
import '../styles/App.css';

function ToggleSwitch({ isChecked, onToggle }) {
  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={onToggle} />
      <span className="slider round"></span>
    </label>
  );
}

export default ToggleSwitch;
