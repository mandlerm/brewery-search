import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

class NavButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const url = `/BreweryList/${this.props.location}`;

    return (
      <Link to={url}>
        <div className="nav i arrow alternate circle left outline icon">
          Back to listings
        </div>
      </Link>
    );
  }
}

export default NavButton;
