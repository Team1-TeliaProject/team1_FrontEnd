import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../Components/Button';

import './LandingPage.scss';

const Landingpage = () => {
  const history = useHistory();

  const toRegistrationForm = (type) => {
    history.push(`/registration/${type}`);
  };

  return (
    <div className="landing-page">
      <h1 className="landing-page__heading">A PLACE TO MEET YOUR FUTURE</h1>
      <p className="landing-page__text">Choose your path of match-making</p>
      <div className="landing-page__btn-div">
        <Button
          handleClick={() => toRegistrationForm('talent')}
          text="I seek work"
          modifier="light"
        />
        <Button
          handleClick={() => toRegistrationForm('company')}
          text="I seek talents"
          modifier="light"
        />
      </div>
    </div>
  );
};

export default Landingpage;
