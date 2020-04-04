import React from 'react';
import './InputText.css';

const InputText = ({handleText, checked, value }) => {
  return (
    <div className="text">
      <input className="text__input neumorphims-inverse" onChange={handleText} placeholder="Search..."  type="text" />
    </div>
  )
}
export default InputText;