import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../css/style.css';

class NavButton extends React.Component {
  render() {
    console.log(this.props.loc);
    const url = `/BreweryList/${this.props.loc}`;

    return (
      <div className="nav">
        <i className="arrow alternate circle left outline icon" />
        <Link to={url}>Back to listings</Link>
      </div>
    );
  }
}

export default withRouter(NavButton);
