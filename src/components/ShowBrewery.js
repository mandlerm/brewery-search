import React from 'react';
import { Link } from 'react-router-dom';
// import LocationMap from './LocationMap';
import NavButton from './NavButton';
import LocationMap from './LocationMap';
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
        <h1 className="heading">See the details</h1>

        <div className="ui raised list segment record ">
          <div className="item">
            <div className="content">
              <h1>{name}</h1>
            </div>
          </div>

          <div className="item">
            <i className="marker icon"></i>
            <div className="content">{street}</div>
            <div className="content tab-left">
              {city}, {state} {postal_code}
            </div>
          </div>

          <div className="item">
            <i className="linkify icon"></i>
            <div className="content">
              <a href={website_url} target="_blank" rel="noopener noreferrer">
                {website_url}
              </a>
            </div>
          </div>

          <div className="map">
            <LocationMap lat={latitude} lon={longitude} />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBrewery;
