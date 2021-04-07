import React, { useState } from 'react';
import Modal from 'react-modal';

import Button from '../Button';
import Input from '../Input';
import { useForm } from '../../hooks/useForm';
import whiteLogo from '../../Assets/DuuniClick_logo__white.svg';
import blueLogo from '../../Assets/DuuniClick_logo_blue.svg';

import './Navigation.scss';

function Navigation() {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [fields, setFields] = useForm({
    username: '',
    password: ''
  });

  const { username, password } = fields;

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setIsUserLogged(true);
  };

  return (
    <div className="nav">
      <img
        className="nav__logo"
        src={window.location.href.includes('welcomepage') ? whiteLogo : blueLogo}
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
      <Modal isOpen={isModalOpen} style={customStyles} contentLabel="Example Modal">
        <div onClick={() => setIsModalOpen(false)} className="close">
          X
        </div>
        <div className="modal">
          <div>
            <h1 className="modal__title">LOG IN</h1>
            <Input
              id="username"
              value={username}
              handleInputChange={setFields}
              type="text"
              placeholder="Username"
            />
            <Input
              id="password"
              value={password}
              handleInputChange={setFields}
              type="password"
              placeholder="Password"
            />
            <div className="modal__btn-div">
              <Button modifier="bg" text="Login" handleClick={handleLogin} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Navigation;
