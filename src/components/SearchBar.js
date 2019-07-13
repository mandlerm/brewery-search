import React from 'react';
import StateSelector from './StateSelector';
import '../css/style.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search ui container">
        <StateSelector button_message="Show me some breweries!" />
      </div>
    );
  }
}

export default SearchBar;
