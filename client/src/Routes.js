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
import JobEditPage from './pages/JobEditPage';
import ApplicantProfilePage from './pages/ApplicantProfilePage';
import EmployerProfilePage from './pages/EmployerProfilePage';
import ProfilePage from './pages/ProfilePage';

const Routes = () => (
  <Switch>
    <Route exact path="/home" component={HomePage} />
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/tryout" component={TryOutPage} />
    <Route exact path="/job/:id/details" component={JobDetailsPage} />
    <Route exact path="/registration/:type" component={ProfileRegistration} />
    <Route exact path="/profilesetup/:type/:id" component={ProfileSetupPage} />
    <Route exact path="/profile/:id/edit" component={ProfileEditPage} />
    <Route exact path="/profile/vacancy/addnew" component={JobCreationPage} />
    <Route exact path="/profile/vacancy/edit" component={JobEditPage} />
    <Route exact path="/forgotpassword" component={JobEditPage} />
    <Route exact path="/changepassword" component={JobEditPage} />
    <Route exact path="/applicantprofile" component={ApplicantProfilePage} />
    <Route exact path="/employerprofile" component={EmployerProfilePage} />
    <Route exact path="/profilepage/:id" component={ProfilePage} />
  </Switch>
);

export default Routes;
