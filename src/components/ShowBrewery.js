import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import NavButton from './NavButton';
import '../css/style.css';

const ShowBrewery = props => (
  <div className="brewery">
    <NavButton />
    <h2>Name of Brewery</h2>
    <p>Address</p>
    <p>Map location</p>
  </div>
);

export default ShowBrewery;
