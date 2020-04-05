import React from 'react'
import './Button.css'

export const STYLES_BUTTON = {
  TYPE:{CICLE: 'cicle',
  SQUARE: 'square',
  NORMAL: 'normal',
  },
  SIZE:{
  SMALL: 'small',
  LARGE: 'large',
  NORMAL: 'normal',
  }
}

const Button = ({
  children = null , 
  size = STYLES_BUTTON.SIZE.NORMAL, 
  type= STYLES_BUTTON.TYPE.NORMAL,
  message, 
  handleClick, 
  disabled
  }) =>  {

  return(
    <div className={`button ${size}`}>
      <button 
        className={`btn neumorphims ${type}`} 
        disabled={disabled} 
        onClick={handleClick} 
        >
          {message}
          {children}
      </button>
    </div>
  )}

export default Button