import React, {useCallback} from 'react'; 
import {renderIcon} from './utils'
import './Card.css';

const Card = ({ data }) => {

  return (
    <div className="card neumorphims">
      <div className="card__header">
        {renderIcon(data.img, 50)}
      </div>
      <div className="card__content">
        <h2>{data.name}</h2>
        <p>{data.description.substr(0, 180).concat('...')}</p>
      </div>
    </div>
  );
}

export default Card;