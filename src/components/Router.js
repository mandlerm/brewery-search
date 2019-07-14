import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ShowBrewery from './ShowBrewery';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/p" component={ShowBrewery} />
    </Switch>
  </BrowserRouter>
);

export default Router;
