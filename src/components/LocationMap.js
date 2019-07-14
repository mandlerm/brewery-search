import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

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
      <div className="map">
        Hello World
        <Map
          google={this.props.google}
          zoom={7}
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
  apiKey: 'AIzaSyDddt2gDTwM_89T1dozM4hE0KHvahINGsY',
  version: 3.31,
})(LocationMap);

// import React from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// // const AnyReactComponent = ({ text }) => <div>{text}</div>;

// // AIzaSyDY1bvNUa5nIeLDkgNsn0b_rSEjkL7rMsY

// const mapStyles = {
//   width: '25%',
//   height: '25%',
// };

// class LocationMap extends React.Component {
//   render() {
//     const { latitude, longitude } = this.props;

//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//           lat: { latitude },
//           lng: { longitude },
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDddt2gDTwM_89T1dozM4hE0KHvahINGsY',
// })(LocationMap);
