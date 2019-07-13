import React from 'react';
import Welcome from './Welcome';
import SearchBar from './SearchBar';
import '../css/style.css';
import BreweryList from './BreweryList';
import BreweryCard from './Brewery';
import CardWrap from './CardWrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <SearchBar />
      </div>
    );
  }
}

export default App;
