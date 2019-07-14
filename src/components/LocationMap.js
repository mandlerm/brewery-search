import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// AIzaSyDY1bvNUa5nIeLDkgNsn0b_rSEjkL7rMsY

const mapStyles = {
  width: '25%',
  height: '25%',
};

class LocationMap extends React.Component {
  render() {
    const { latitude, longitude } = this.props;

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: { latitude },
          lng: { longitude },
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDddt2gDTwM_89T1dozM4hE0KHvahINGsY',
})(LocationMap);
