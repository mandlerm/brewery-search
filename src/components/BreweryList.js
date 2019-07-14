import React from 'react';
import '../css/style.css';
import ListItem from './ListItem';

class BreweryList extends React.Component {
  onClickBrewer = id => {
    //  use id to fetch the element of brewList with that id
    // send that card into as props to ShowBrewery
    // React router
    console.log(`logging${id}`);
    console.log(id);
  };

  render() {
    return (
      <div>
        {this.props.brewList.map(brewer => (
          <ListItem brew={brewer} />
        ))}
      </div>
    );
  }
}

export default BreweryList;
