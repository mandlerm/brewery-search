import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import Search from './Search';
import './css/style.css';
import BreweryList from './BreweryList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <Search />
        <BreweryList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
