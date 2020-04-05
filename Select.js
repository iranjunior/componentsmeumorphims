import React, {useState, useCallback} from 'react';
import './Select.css';

// These options could be in another file, or even come from an HTTP request
const Options = [ "Value 1", "Value 2", "Value 3" ];

const Select = ({options = Options}) => {

  const [selected, setSelected] = useState('Select');
  const [isOpen, setOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setOpen(isOpen => isOpen = isOpen ? false: true);
  });
  const handleSelect = useCallback((value) => () => {
    setSelected(value)
    setOpen(false);
  });
  const RenderOptions = useCallback(() => {
    return options.map(item => <li 
              className="dropdown__option" 
              onClick={handleSelect(item)} 
              >
                <div>
                  {item}
                </div>
              </li>
    )
  });
   
  return (
    <div className="select" >
    <div className={`select__header neumorphims${isOpen? '-inverse': ''}`} onClick={handleOpen}>
      <span>{selected}</span>
      <span className="arrow" />
    </div>
    <ul className={`select__dropdown neumorphims ${isOpen? 'open': 'closed'}`}>
      {RenderOptions()}
      </ul>
    </div>
  )
}

export default Select;