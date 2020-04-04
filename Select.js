import React, {useState} from 'react';
import './Select.css';

const Options = [ "Value 1", "Value 2", "Value 3" ];

const Select = ({options = Options}) => {
  const [selected, setSelected] = useState('Select');
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(isOpen => isOpen = isOpen ? false: true);
  }
  const handleSelect = (value) => () => {
    setSelected(value)
  }
  const RenderOptions = () => {
    return options.map(item => <li 
    className="dropdown__option" 
    onClick={handleSelect(item)} 
    >
    <div>
    {item}
    </div>
    </li>)
  } 
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