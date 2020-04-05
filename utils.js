import React  from 'react';
import * as Icon from './Icon';

export const renderIcon = ((icon, {size = 20}) => {
  return React.createElement(Icon[icon], {size});
});