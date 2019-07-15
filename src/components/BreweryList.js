import React from 'react';
import '../css/style.css';
import axios from 'axios';
import ListItem from './ListItem';

class BreweryList extends React.Component {
  async componentWillMount() {
    const response = await axios.get(
      `https://api.openbrewerydb.org/breweries`,
      {
        params: { by_city: 'birmingham' },
      }
    );
    this.setState({ cityData: response.data });
    console.log('state set');
  }

  state = {
    cityData: [],
  };

  render() {
    let list = [];

    this.props.brewList.length > 0
      ? (list = this.props.brewList)
      : (list = this.state.cityData);
    console.log(list);
    return (
      <div className="fullList list-item">
        {list.map(brewer => (
          <ListItem
            key={brewer.id}
            brew={brewer}
            onClick={this.props.onBreweryPick}
          />
        ))}
      </div>
    );
  }
}

export default BreweryList;

// async () => {
//   const response = await axios.get(
//     `https://api.openbrewerydb.org/breweries`,
//     {
//       params: { by_city: location },
//     }
//   );

//   this.setState({ brewery_listings: response.data });
// };
// }
