// Main app component.  Handles API call for state selected.

/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import Welcome from './Welcome';
import SearchBar from './SearchBar';
import '../css/style.css';
import BreweryList from './BreweryList';
import StateList from './StateList';
import { slugify } from '../helpers';

class App extends React.Component {
  state = {
    brewery_listings: [],
    chosen_brewery: {},
    state_listings: [],
  };

  async componentWillMount(props) {
    const fullList = this.props.location.data;
    if (fullList !== undefined) {
      this.setState({ brewery_listings: fullList.list });
    }

    const response = await axios.get(
      `https://api.openbrewerydb.org/breweries`,
      {
        params: { by_city: 'birmingham' },
      }
    );
    this.setState({ brewery_listings: response.data });
  }

  onSearchSubmit = async location => {
    const response = await axios.get(
      `https://api.openbrewerydb.org/breweries`,
      {
        params: { by_state: location },
      }
    );

    this.setState({ brewery_listings: response.data });
    const slug = slugify(location);

    this.props.history.push(`/BreweryList/${slug}`);
  };

  onClickBrewer = id => {
    const listItem = this.state.brewery_listings.find(function(b) {
      return b.id === id.id;
    });

    this.setState({ chosen_brewery: { listItem } });
    const slug = slugify(listItem.name);
    this.props.history.push({
      pathname: `/BreweryShow/${slug}`,
      state: {
        chosen_brewery: listItem,
        fullList: this.state.brewery_listings,
      },
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
        {this.state.brewery_listings.length > 0 ? (
          <BreweryList
            brewList={this.state.brewery_listings}
            onBreweryPick={this.onClickBrewer}
          />
        ) : (
          <StateList brewList={this.state.state_listings} />
        )}
      </div>
    );
  }
}

export default App;
