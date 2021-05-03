import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import Button from '../Button';
import Input from '../Input';
import ProfileDropdown from '../ProfileDropdown';
import { useForm } from '../../hooks/useForm';
import logo from '../../Assets/final_logo.svg';
import profilePic from '../../Assets/proifle.jpeg';

import './Navigation.scss';
import { logUser } from '../../services/login';

Modal.setAppElement('#root');
function Navigation() {
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('duuni-app')));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toForgotPassword = () => {
    history.push('./forgotpassword');
  };

  const [fields, setFields] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = fields;

  const customStyles = {
    content: {
      background: '#17252a',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)'
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    logUser(credentials).then((response) => {
      if (response.data) {
        setIsModalOpen(false);
        setUser(response.data);
        localStorage.setItem('duuni-app', JSON.stringify(response.data));
        history.push('/');
      }
    });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setUser(null);
    localStorage.removeItem('duuni-app');
    setIsDropdownOpen(false);
    history.push('/landingPage');
  };

  const handleProfile = () => {
    if (user.userInfo.userType === 'talent') {
      history.push(`/employeeProfile/${user.userInfo.userId}`);
      setIsDropdownOpen(false);
    } else {
      history.push(`/companyProfile/${user.userInfo.userId}`);
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="nav">
      <img className="nav__logo" src={logo} alt="logo" onClick={() => history.push('/')} />
      <div className="nav__profile-div">
        {user ? (
          <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="nav__user-div">
            <img
              className="nav__profile-photo"
              src={user.userInfo.photo ? user.userInfo.photo : profilePic}
            />
            <span className="nav__profile-name">
              {user.userInfo.name ? user.userInfo.name : ''}
            </span>
          </div>
        ) : (
          <Button text="Login" modifier="nav" handleClick={() => setIsModalOpen(true)} />
        )}
      </div>
      <Modal isOpen={isModalOpen} style={customStyles}>
        <div onClick={() => setIsModalOpen(false)} className="close">
          X
        </div>
        <div className="login-content">
          <h1 className="login-content__title">LOG IN</h1>
          <Input
            id="email"
            value={email}
            handleInputChange={setFields}
            type="email"
            placeholder="Email"
            label="Email"
          />
          <Input
            id="password"
            value={password}
            handleInputChange={setFields}
            type="password"
            placeholder="Password"
            label="Password"
          />
          <div className="login-content__btn-div">
            <Button modifier="light" text="Login" handleClick={handleLogin} />
          </div>
          <p className="login-content__text">
            Forgot password?{' '}
            <span onClick={toForgotPassword} className="login-content__text-link ">
              Reset
            </span>
          </p>
        </div>
      </Modal>
      <div
        className={
          isDropdownOpen ? 'nav__dropdown-div' : 'nav__dropdown-div nav__dropdown-div--close'
        }
      >
        <ProfileDropdown
          setIsModalOpen={setIsDropdownOpen}
          handleExit={handleLogout}
          handleEdit={handleProfile}
        />
      </div>
    </div>
  );
}

export default Navigation;
