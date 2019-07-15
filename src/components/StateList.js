import React from 'react';
import '../css/style.css';
import axios from 'axios';
import ListItem from './ListItem';

class StateList extends React.Component {
  async componentWillMount() {
    const response = await axios.get(
      `https://api.openbrewerydb.org/breweries`,
      {
        params: { by_city: 'birmingham' },
      }
    );
    this.setState({ brewery_listings: response.data });
    console.log('state set');
  }

  state = {
    brewery_listings: [],
  };

  render() {
    return <div className="fullList list-item">bham listing</div>;
  }
}

export default StateList;
