// Displays welcome header and use instructions

import React from 'react';
import '../css/style.css';

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <h1>
          Welcome to the Brewery Finder <i className="beer big icon"></i>
        </h1>
        <p>
          Browse Birmingham, AL or select a state to see the breweries near you!
        </p>
      </div>
    );
  }
}

export default Welcome;
