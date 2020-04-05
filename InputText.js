import React from 'react';
import './InputText.css';

const InputText = ({handleText, checked, value, placeHolder }) => {
  return (
    <div className="text">
      <input 
        className="text__input neumorphims-inverse" 
        onChange={handleText} placeholder={placeHolder}  
        type="text" 
        />
    </div>
  )
}
export default InputText;