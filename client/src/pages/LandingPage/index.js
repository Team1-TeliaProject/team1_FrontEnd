import React from 'react';
import Button from '../../Components/Button';

import './LandingPage.scss';

const Landingpage = () => {
  return (
    <div className="landing-page">
      <h1 className="landing-page__heading">A PLACE TO MEET YOUR FUTURE</h1>
      <div className="landing-page__btn-div">
        <Button text="Get Started" modifier="sm" />
      </div>
    </div>
  );
};

export default Landingpage;
