import React, {useState, useEffect, useCallback} from 'react';
import Button, {STYLES_BUTTON} from './Button';
import Switch from `./Switch`;
import Radio from `./Radio`;
import Card from './Card';
import InputText from './InputText';
import Select from './Select';
import IconButton from './IconButton';
import ProgressiveBar, {STYLE_PROGRESSIVE} from './ProgressiveBar';

import { handleCheckSwitch } from './handles'

import data from './data.json'
import './app.css';

const App = () => {
  const [current, setCurrent] = useState(1);
  const [selected, setSelected] = useState('value1');
  const [checkbox, setCheckbox] = useState(false);
  const steps = 3

  const handleSelect = useCallback((value) => {
   setSelected(value);
  });

    return (
      <div className="App">
        <div className="App__Elements" >
          <div className="App__Elements__Cards">
              <Card data={data} />
          </div>
          <div className="App__Elements__Switchs">
            <Switch value={checkbox} checkAction={handleCheckSwitch(setCheckbox)} />
            <Switch checked checkAction={handleCheckSwitch(setCheckbox)} />
            <Radio handleCheck={handleSelect} value="value1" selected={selected} />
            <Radio handleCheck={handleSelect} value="value2" selected={selected} />
          </div>
          <div className="App__Elements__Buttons">
            <IconButton icon="ArrowRightIcon" sizeIcon={16} type={STYLES_BUTTON.TYPE.SQUARE} size={STYLES_BUTTON.SIZE.SMALL}/>
            <IconButton icon="PauseIcon" sizeIcon={16} type={STYLES_BUTTON.TYPE.SQUARE} size={STYLES_BUTTON.SIZE.SMALL} />
            <IconButton icon="ArrowLeftIcon" sizeIcon={16} type={STYLES_BUTTON.TYPE.SQUARE} size={STYLES_BUTTON.SIZE.SMALL} />
            <Select />
          </div>
        </div>
        <div className="App__Elements" >
          <div className="App__Elements__Actions">
          <div className="App__Elements__Actions__Larges">
            <InputText placeHolder="Pesquisar..."/>
            <Button message="Button" size={STYLES_BUTTON.SIZE.LARGE}/>
          </div>
          <div className="App__Elements__Actions__Normals">
            <IconButton icon="PlusIcon" sizeIcon={16} type={STYLES_BUTTON.TYPE.CICLE}  size={STYLES_BUTTON.SIZE.SMALL}/>
            <IconButton icon="ShareIcon" sizeIcon={16} message="Share" />
          </div>
          <div className="App__Elements__Actions__Smalls" >
            <IconButton icon="HeartIcon" sizeIcon={16} type={STYLES_BUTTON.TYPE.SQUARE} size={STYLES_BUTTON.SIZE.SMALL} />
            <IconButton icon="CommentsIcon" sizeIcon={16} type={STYLES_BUTTON.TYPE.SQUARE} size={STYLES_BUTTON.SIZE.SMALL} />
            <IconButton icon="BookMarkIcon" sizeIcon={16} type={STYLES_BUTTON.TYPE.SQUARE} size={STYLES_BUTTON.SIZE.SMALL} />
          </div>
          </div>
          <div className="App__Elements__Progressives">
            <ProgressiveBar size={STYLE_PROGRESSIVE.LIGHT} content={30} />
            <ProgressiveBar size={STYLE_PROGRESSIVE.NORMAL} content={20} />
            <ProgressiveBar size={STYLE_PROGRESSIVE.STRONG} content={90} />          
            </div>
        </div>
      </div>
    );
}

export default App;
