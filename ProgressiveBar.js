import React, {useMemo} from 'react';
import './ProgressiveBar.css';

export const STYLE_PROGRESSIVE = {
  NORMAL: 'normal',
  LIGHT: 'light',
  STRONG: 'strong',
}
const ProgressiveBar = ({ content, size = STYLE_PROGRESSIVE.NORMAL }) => {
  
  const calc = useMemo(() => `calc(-${content}% + 35px)`);
  const contentPercent = useMemo((() => `${content}%`)) 
  return (
    <div className={`progressive-bar neumorphims-inverse ${size}`} data-content={content}>
      <span className="ballon neumorphims" style={{right: calc }} >{contentPercent}</span>
      <div 
        className="progressive-bar__content" 
        style={{width: `${content}%`}}
        ></div>
    </div>
  )
}

export default ProgressiveBar;
