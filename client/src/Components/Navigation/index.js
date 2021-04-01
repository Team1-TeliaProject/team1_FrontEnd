import React, { useState } from 'react';

import Button from '../Button';
import whiteLogo from '../../Assets/DuuniClick_logo__white.svg';
import blueLogo from '../../Assets/DuuniClick_logo_blue.svg';

import './Navigation.scss';

function Navigation() {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log('xxxx', window.location.href.includes('3000'));

  return (
    <div className="nav">
      <img
        className="nav__logo"
        src={window.location.href.includes('landing') ? whiteLogo : blueLogo}
        alt="logo"
        onClick={() => console.log('xxx')}
      />
      <div className="nav__profile-div">
        {isUserLogged ? (
          <h2>User Profile</h2>
        ) : (
          <Button text="Login" modifier="nav" handleClick={() => setIsModalOpen(true)} />
        )}
      </div>
    </div>
  );
}

export default Navigation;
