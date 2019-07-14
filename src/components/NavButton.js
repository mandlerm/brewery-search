import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

const NavButton = props => {
  const url = `/BreweryList/${props.location}`;

  return (
    <Link to={url}>
      <div className="nav i arrow alternate circle left outline icon">
        Back to listings
      </div>
    </Link>
  );
};

export default NavButton;
