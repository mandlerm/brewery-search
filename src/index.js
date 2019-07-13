import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import Search from './Search';
import './css/style.css';
import BreweryList from './BreweryList';
import BreweryCard from './Brewery';
import CardWrap from './CardWrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <Search />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
