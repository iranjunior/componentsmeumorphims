import React from 'react';
import './IconButton.css';
import Button from './Button';
import * as Icons from './Icon';

const IconButton = ({message, icon , size, ...rest}) =>  {
  const getIcons = () => {
    return React.createElement(Icons[icon], {height: size,width: size});
  }
  return (
  <Button
   message={message}
   {...rest} 
   >
  {getIcons()}
  </Button>
  )
}

export default IconButton