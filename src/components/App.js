import React from 'react';
import Welcome from './Welcome';
import SearchBar from './SearchBar';
import '../css/style.css';
import BreweryList from './BreweryList';
import BreweryCard from './Brewery';
import CardWrap from './CardWrap';

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
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
