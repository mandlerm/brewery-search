import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import Search from './Search';
import './css/style.css';
import BreweryList from './BreweryList';
import Segment from './BreweryCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <Search />
        <BreweryCard>
          <BreweryList />
        </BreweryCard>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
