import React from 'react';
import '../css/style.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './App';
import ShowBrewery from './ShowBrewery';
import BreweryList from './BreweryList';
import Error from './Error';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route exact path="/BreweryList/:state" component={App} /> */}
      <Route
        path="/BreweryList/:state"
        render={routeProps => <App {...routeProps} />}
      />
      <Route
        path="/BreweryShow/:id"
        render={routeProps => <ShowBrewery {...routeProps} />}
      />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Router;
