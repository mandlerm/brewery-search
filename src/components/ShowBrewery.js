import React from 'react';
import { Link } from 'react-router-dom';
// import LocationMap from './LocationMap';
import NavButton from './NavButton';
import '../css/style.css';

class ShowBrewery extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="brewery">
        <NavButton />
        <h2>Name of Brewery</h2>
        <p>Address</p>
        <p>Map location</p>
      </div>
    );
  }
}
// }
// const ShowBrewery = props => (
//   <div className="brewery">
//     <NavButton />
//     <h2>Name of Brewery</h2>
//     <p>Address</p>
//     <p>Map location</p>

//   </div>
// );

export default ShowBrewery;
