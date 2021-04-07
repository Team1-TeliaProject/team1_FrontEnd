import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import TryOutPage from './pages/TryOutPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/welcomepage" component={LandingPage} />
    <Route exact path="/tryout" component={TryOutPage} />
  </Switch>
);

export default Routes;
