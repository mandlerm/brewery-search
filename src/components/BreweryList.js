import React from 'react';
import '../css/style.css';
import ListItem from './ListItem';

class BreweryList extends React.Component {
  onClickBrewer = id => {
    //  use id to fetch the element of brewList with that id
    // send that card into as props to ShowBrewery
    // React router
    console.log(
      this.props.brewList.find(function(b) {
        return b.id === id.id;
      })
    );
  };

  render() {
    return (
      <div className="fullList list-item">
        {this.props.brewList.map(brewer => (
          <ListItem
            key={brewer.id}
            brew={brewer}
            onClick={this.onClickBrewer}
          />
        ))}
      </div>
    );
  }
}

export default BreweryList;
