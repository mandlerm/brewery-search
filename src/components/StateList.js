// API call to retrieve default city

import React from 'react';
import '../css/style.css';
import axios from 'axios';

class StateList extends React.Component {
  async componentWillMount() {
    const response = await axios.get(
      `https://api.openbrewerydb.org/breweries`,
      {
        params: { by_city: 'birmingham' },
      }
    );
    this.setState({ brewery_listings: response.data });
  }

  state = {
    brewery_listings: [],
  };

  render() {
    return <div className="fullList list-item"></div>;
  }
}

export default StateList;
