import React, {useCallback} from 'react';
import Button from './Button';
import { renderIcon } from './utils'
import './IconButton.css';

const IconButton = ({message, icon , size, ...rest}) =>  {
  const getIcons = useCallback(renderIcon);
  return (
  <Button
   message={message}
   {...rest} 
   >
  {getIcons(icon, {size})}
  </Button>
  )
}

export default IconButton