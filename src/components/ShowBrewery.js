import React from 'react';
import { withRouter } from 'react-router-dom';
import NavButton from './NavButton';
import LocationMap from './LocationMap';
import '../css/style.css';

class ShowBrewery extends React.Component {
  render() {
    const {
      name,
      street,
      city,
      state,
      postal_code,
      website_url,
      latitude,
      longitude,
    } = this.props.location.state.chosen_brewery;

    const { fullList } = this.props.location.state;
    console.log(latitude, longitude);
    return (
      <div className="breweryPage">
        <NavButton
          className="nav i arrow alternate circle left outline icon"
          loc={state}
          listOfBrews={fullList}
        />
        <h1 className="heading">See the details</h1>

        <div className="card">
          <div className="ui raised list segment record ">
            <div className="item">
              <div className="content brewName ">
                <h1 className="name">{name}</h1>
              </div>
            </div>
            <div className="breweryInfo">
              <div className="item">
                <div className="content">{street}</div>
                <div className="content">
                  {city}, {state} {postal_code}
                </div>
              </div>

              <div className="item">
                <div className="content">
                  <a
                    href={website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {website_url}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <LocationMap lat={latitude} lon={longitude} />
        </div>
      </div>
    );
  }
}

export default withRouter(ShowBrewery);
