import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import TryOutPage from './pages/TryOutPage';
import JobDetailsPage from './pages/JobDetailsPage';
import ProfileRegistration from './pages/ProfileRegistrationPage';
import ProfileSetupPage from './pages/ProfileSetupPage';
import ProfileEditPage from './pages/ProfileEditPage';
import JobCreationPage from './pages/JobCreationPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/welcomepage" component={LandingPage} />
    <Route exact path="/tryout" component={TryOutPage} />
    <Route exact path="/jobs/details" component={JobDetailsPage} />
    <Route exact path="/registration/:type" component={ProfileRegistration} />
    <Route exact path="/profilesetup/:type" component={ProfileSetupPage} />
    <Route exact path="/profile/edit" component={ProfileEditPage} />
    <Route exact path="/profile/vacancy/addnew" component={JobCreationPage} />
  </Switch>
);

export default Routes;
