import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class LocationMap extends React.Component {
  render() {
    const { lat, lon } = this.props;
    const latInt = parseInt(lat);
    const lonInt = parseInt(lon);

    const style = {
      width: '300px',
      height: '300px',
    };
    return (
      <div className="map ui medium rounded image ">
        Come visit us!
        <Map
          google={this.props.google}
          zoom={10}
          style={style}
          initialCenter={{
            lat: latInt,
            lng: lonInt,
          }}
        ></Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBWtfYgs6LxA3jzodaY-dbcDnFXYVa2w1k',
  version: 3.37,
})(LocationMap);
// AIzaSyAH8240UE283tYzYe1zr9MXNZs-Vw57jtk

// apiKey: 'AIzaSyDddt2gDTwM_89T1dozM4hE0KHvahINGsY',
