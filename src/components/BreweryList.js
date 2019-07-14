import React from 'react';
import '../css/style.css';
import ListItem from './ListItem';

class BreweryList extends React.Component {
  onClickBrewer = id => {
    const listItem = this.props.brewList.find(function(b) {
      return b.id === id.id;
    });

    console.log(listItem);
    // this.props.history.push(`/ShowBrewery/`);
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
