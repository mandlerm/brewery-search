import React from 'react';
import axios from 'axios';
import Welcome from './Welcome';
import SearchBar from './SearchBar';
import '../css/style.css';

class App extends React.Component {
  onSearchSubmit(location) {
    axios
      .get(`https://api.openbrewerydb.org/breweries`, {
        params: { by_state: location },
      })
      .then(response => {
        console.log(response.data);
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
