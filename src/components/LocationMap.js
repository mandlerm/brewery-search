import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class LocationMap extends React.Component {
  render() {
    const { lat, lon } = this.props;
    const latInt = parseFloat(lat);
    const lonInt = parseFloat(lon);

    const style = {
      width: '500px',
      height: '500px',
    };

    return (
      <div className="map ui medium rounded image ">
        Come visit us!
        <Map
          google={this.props.google}
          zoom={16}
          style={style}
          initialCenter={{
            lat: latInt,
            lng: lonInt,
          }}
        />
        <Marker position={{ lat: latInt, lng: lonInt }} />
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

// AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo

// AIzaSyBWtfYgs6LxA3jzodaY - dbcDnFXYVa2w1k;
