import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import JobDetailsPage from './pages/JobDetailsPage';
import ProfileRegistration from './pages/ProfileRegistrationPage';
import ProfileSetupPage from './pages/ProfileSetupPage';
import ProfileEditPage from './pages/ProfileEditPage';
import JobCreationPage from './pages/JobCreationPage';
import JobEditPage from './pages/JobEditPage';
import EmployeeProfile from './pages/employeeProfile';
import CompanyProfile from './pages/CompanyProfile';

import ProtectedRoute from './Utils/ProtectedRoute';

const Routes = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={HomePage} />
    <Route exact path="/landingPage" component={LandingPage} />
    <Route exact path="/job/:id/details" component={JobDetailsPage} />
    <Route exact path="/registration/:type" component={ProfileRegistration} />
    <Route exact path="/profilesetup/:type/:id" component={ProfileSetupPage} />
    <ProtectedRoute exact path="/profile/edit/:id/:type" component={ProfileEditPage} />
    <ProtectedRoute exact path="/profile/:id/vacancy/addnew" component={JobCreationPage} />
    <ProtectedRoute exact path="/profile/vacancy/:id/edit" component={JobEditPage} />
    <ProtectedRoute exact path="/companyProfile/:id" component={CompanyProfile} />
    <ProtectedRoute exact path="/employeeProfile/:id" component={EmployeeProfile} />
  </Switch>
);

export default Routes;
