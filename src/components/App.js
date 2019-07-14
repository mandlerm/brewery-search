/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import Welcome from './Welcome';
import SearchBar from './SearchBar';
import '../css/style.css';
import BreweryList from './BreweryList';

class App extends React.Component {
  state = {
    brewery_listings: [],
    chosen_brewery: {},
  };

  onSearchSubmit = async location => {
    const response = await axios.get(
      `https://api.openbrewerydb.org/breweries`,
      {
        params: { by_state: location },
      }
    );
    this.setState({ brewery_listings: response.data });
    this.props.history.push(`/BreweryList/${location}`);
  };

  onClickBrewer = id => {
    const listItem = this.state.brewery_listings.find(function(b) {
      return b.id === id.id;
    });

    this.setState({ chosen_brewery: { listItem } });

    this.props.history.push({
      pathname: `/BreweryShow/${listItem.name}`,
      state: { chosen_brewery: listItem },
    });
  };

  render() {
    return (
      <div>
        <Welcome />
        <SearchBar
          button_message="Show me some breweries!"
          onSubmit={this.onSearchSubmit}
        />
        <BreweryList
          brewList={this.state.brewery_listings}
          onBreweryPick={this.onClickBrewer}
        />
      </div>
    );
  }
}

export default App;
