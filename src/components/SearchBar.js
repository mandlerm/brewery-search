import React from 'react';
import StateSelector from './StateSelector';
import '../css/style.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search ui container">
        <StateSelector />
        <button className="ui primary button search-button" type="submit">
          Show me the brewery!
        </button>
      </div>
    );
  }
}

export default SearchBar;
