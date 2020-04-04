import React, {useState} from 'react';
import './Radio.css'

const Radio = ({ selected, value, handleCheck }) => {
  
  const checkAction = (e) => {
    handleCheck(e.target.value);
  };


  return (
    <>
    <label className={`radio neumorphims${value === selected ? '': '-inverse'}`} >
      <input 
      className="radio__input"
      value={value}
      onChange={checkAction} 
      checked={value == selected} 
      name="radio" 
      type="radio" 
      />
      <span className="checkmark neumorphims"/>
    </label>
    </>
  )
}
export default Radio;