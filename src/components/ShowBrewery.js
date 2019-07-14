import React from 'react';
import { Link } from 'react-router-dom';
// import LocationMap from './LocationMap';
import NavButton from './NavButton';
import '../css/style.css';

class ShowBrewery extends React.Component {
  render() {
    const {
      name,
      brewery_type,
      street,
      city,
      state,
      postal_code,
      website_url,
      latitude,
      longitude,
    } = this.props.location.state.chosen_brewery;

    console.log(this.props);
    return (
      <div className="breweryPage">
        <NavButton
          className="nav i arrow alternate circle left outline icon"
          location={state}
        />
        <div className="displayBrewery ui raised segment">
          {' '}
          <h1>{name}</h1>
          <p>{brewery_type}</p>
          <p>Map location</p>
          <a href={website_url} target="_blank">
            {website_url}
          </a>
        </div>
      </div>
    );
  }
}

export default ShowBrewery;
