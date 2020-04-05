import React from 'react'
import './Button.css'

export const STYLES_BUTTON = {
  CICLE: 'cicle',
  SQUARE: 'square',
  SMALL: 'small',
  LARGE: 'large',
  NORMAL: 'normal',
}

const Button = ({
  children = null , 
  style = STYLES_BUTTON.NORMAL, 
  message, 
  handleClick, 
  disabled
  }) =>  {
    
  return(
    <div className={`button ${style}`}>
      <button 
        className={`button neumorphims`} 
        disabled={disabled} 
        onClick={handleClick} 
        >
          {message}
          {children}
      </button>
    </div>
  )}

export default Button