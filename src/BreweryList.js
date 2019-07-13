import React from 'react';
import './css/style.css';

class BreweryList extends React.Component {
  render() {
    return (
      <div className="brewery-list">
        <h1>List of breweries</h1>
        <h3>Name</h3>
        <p>Type</p>
        <p>Address</p>
        <a href="/">URL</a>
      </div>
    );
  }
}

export default BreweryList;