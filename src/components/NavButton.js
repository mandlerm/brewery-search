import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../css/style.css';

class NavButton extends React.Component {
  render() {
    const url = `/BreweryList/${this.props.loc}`;

    return (
      <div className="nav">
        <i className="arrow alternate circle left outline icon" />
        <Link
          to={{
            pathname: url,
            data: {
              list: this.props.listOfBrews,
            },
          }}
        >
          Back to listings
        </Link>
      </div>
    );
  }
}

export default withRouter(NavButton);
