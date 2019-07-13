import React from 'react';
import StateSelector from './StateSelector';
import './css/style.css';

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <StateSelector />
        <button>Show me the brewery!</button>
      </div>
    );
  }
}

export default Search;
