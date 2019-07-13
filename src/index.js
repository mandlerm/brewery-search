import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import Search from './Search';
import './css/style.css';
import BreweryList from './BreweryList';
import Segment from './Segment';

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <Search />
        <Segment>
          <BreweryList />
        </Segment>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
