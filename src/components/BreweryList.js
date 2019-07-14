import React from 'react';
import '../css/style.css';
import ListItem from './ListItem';

class BreweryList extends React.Component {
  componentDidMount() {
    console.log('list view mounted')
  }

  render() {
    // console.log(`list of propls ${this.props}`);
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
