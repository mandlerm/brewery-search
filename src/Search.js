import React from 'react';
import './css/style.css';

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <form>
          <input type="text" placeholder="enter location"></input>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
