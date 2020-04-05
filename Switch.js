import React from 'react';
import './Switch.css';
import { keyPressAction } from './handles.js';

const Switch = ({checkAction, checked, value}) => {
  return (
    <label className="switch">
      <input 
        className="switch__checkbox" 
        onChange={(e) => checkAction(!!e.target.value)}
        value={value}
        checked={checked} 
        type="checkbox" 
      />
      <span className="toggle neumorphims-inverse"/>
    </label>
  )
}
export default Switch;