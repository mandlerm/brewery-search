import React from 'react';
import axios from 'axios';
import Welcome from './Welcome';
import SearchBar from './SearchBar';
import '../css/style.css';
import BreweryList from './BreweryList';
import BreweryCard from './Brewery';
import CardWrap from './CardWrap';

class App extends React.Component {
  onSearchSubmit(location) {
    axios.get(`https://api.openbrewerydb.org/breweries`, {
      params: { by_state: location },
    });
  }

  render() {
    return (
      <div>
        <Welcome />
        <SearchBar
          button_message="Show me some breweries!"
          onSubmit={this.onSearchSubmit}
        />
      </div>
    );
  }
}

export default App;
