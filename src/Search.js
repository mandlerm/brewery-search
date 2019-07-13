import React from 'react';
import StateSelector from './StateSelector';
import './css/style.css';

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <StateSelector />
        <button className="ui primary button search-button" type="submit">
          Show me the brewery!
        </button>
      </div>
    );
  }
}

export default Search;
