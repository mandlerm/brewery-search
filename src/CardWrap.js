import React from 'react';
import './css/style.css';

const CardWrap = props => (
  <div className="card-wrap">
    <div className="content">{props.children}</div>
    <div className="brewery-card ui card"></div>
  </div>
);

export default CardWrap;
