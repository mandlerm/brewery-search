import React from 'react';
import StateSelector from './StateSelector';
import '../css/style.css';

class SearchBar extends React.Component {
  onFormSubmit(event) {
    event.preventDefault();

    console.log('I submitted');
  }

  render() {
    return (
      <div className="search ui container">
        <form onSubmit={this.onFormSubmit}>
          <StateSelector />
          <button className="ui primary button search-button" type="submit">
            Show me the brewery!
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
