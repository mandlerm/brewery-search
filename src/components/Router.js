import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ShowBrewery from './ShowBrewery';
import Error from './Error';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/brewery/:name" component={ShowBrewery} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Router;
