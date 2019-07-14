import React from 'react';
import '../css/style.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './App';
import ShowBrewery from './ShowBrewery';
import Error from './Error';
import BreweryList from './BreweryList';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/BreweryList/:state" component={App} />
      <Route path="/BreweryShow/:id" component={ShowBrewery} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Router;
