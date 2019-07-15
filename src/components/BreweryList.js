import React from 'react';
import '../css/style.css';
import axios from 'axios';
import ListItem from './ListItem';

class BreweryList extends React.Component {
  render() {
    return (
      <div className="fullList list-item">
        {this.props.brewList.map(brewer => (
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
