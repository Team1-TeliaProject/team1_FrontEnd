import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import Button from '../Button';
import Input from '../Input';
import { useForm } from '../../hooks/useForm';
import whiteLogo from '../../Assets/DuuniClick_logo__white.svg';

import './Navigation.scss';

function Navigation() {
  const history = useHistory();
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toForgotPassword = () => {
    history.push('./forgotpassword');
  };

  const [fields, setFields] = useForm({
    username: '',
    password: ''
  });

  const { username, password } = fields;

  const customStyles = {
    content: {
      background: '#3aafa9',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
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
      <img className="nav__logo" src={whiteLogo} alt="logo" onClick={() => console.log('xxx')} />
      <div className="nav__profile-div">
        {isUserLogged ? (
          <h2>User Profile</h2>
        ) : (
          <Button text="Login" modifier="nav" handleClick={() => setIsModalOpen(true)} />
        )}
      </div>
      <Modal isOpen={isModalOpen} style={customStyles}>
        <div onClick={() => setIsModalOpen(false)} className="close">
          X
        </div>
        <div className="content">
          <h1 className="content__title">LOG IN</h1>
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
          <div className="content__btn-div">
            <Button modifier="dark" text="Login" handleClick={handleLogin} />
          </div>
          <p className="content__text">
            Forgot password?{' '}
            <span onClick={toForgotPassword} className="content__text-link ">
              Reset
            </span>
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Navigation;
