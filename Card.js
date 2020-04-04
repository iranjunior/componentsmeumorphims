import React from 'react';
import path from 'path'
import './Card.css';

const Card = ({ data }) => {
  return (
    <div className="card neumorphims">
      <div className="card__header">
        <img height={50} src={data.img} />
      </div>
      <div className="card__content">
        <h2>{data.name}</h2>
        <p>{data.description.substr(0, 180).concat('...')}</p>
      </div>
    </div>
  );
}

export default Card;