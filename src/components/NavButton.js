// Appears on Brewery Show to enable user to navigate back to full search results
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { slugify } from '../helpers';
import '../css/style.css';

class NavButton extends React.Component {
  render() {
    const slug = slugify(this.props.loc);

    const url = `/BreweryList/${slug}`;

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
