import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useForm } from '../../hooks/useForm';
import { registerCompany, registerTalent } from '../../services/userService';
import { logUser } from '../../services/login';

import './ProfileRegistration.scss';

const ProfileRegistration = ({ match }) => {
  const history = useHistory();
  const type = match.params.type;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  const [fields, setFields] = useForm({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
    passwordRe: '',
  });

  const {
    firstName,
    lastName,
    companyName,
    email,
    password,
    passwordRe,
  } = fields;

  const createTalentAccount = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      setError('All fields are required');
    } else {
      if (password !== passwordRe) {
        setError('Password not matched');
      } else {
        const userInfo = { firstName, lastName, email, password };
        registerTalent(userInfo)
          .then((response) => {
            if (response.data) {
              setUser(response.data);
              setIsModalOpen(true);
            }
          })
          .catch((error) => {
            setError(error.response.data.Error);
          });
      }
    }
  };

  const createCompanyAccount = (e) => {
    e.preventDefault();
    if (!companyName || !email || !password) {
      setError('All fields are required');
    } else {
      if (password !== passwordRe) {
        setError('Password not matched');
      } else {
        const userInfo = { name: companyName, email, password };

        registerCompany(userInfo)
          .then((response) => {
            if (response.data) {
              setUser(response.data);
              setIsModalOpen(true);
            }
          })
          .catch((error) => {
            setError(error.response.data.Error);
          });
      }
    }
  };

  const customStyles = {
    content: {
      background: '#17252a',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleSkip = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    logUser(credentials)
      .then((response) => {
        if (response.data) {
          setIsModalOpen(false);
          setUser(response.data);
          localStorage.setItem('duuni-app', JSON.stringify(response.data));
          history.push('/');
        }
      })
      .catch((error) => {
        setError(error.response.data.Error);
      });
  };

  return (
    <div className="profile-registration">
      {type === 'talent' && (
        <form className="profile-registration__form">
          <h3 className="profile-registration__heading">CREATE AN ACCOUNT</h3>
          <p
            className={
              error
                ? 'profile-registration__error'
                : 'profile-registration__error-hidden'
            }
          >
            {error}
          </p>
          <Input
            type="text"
            placeholder="First Name"
            id="firstName"
            value={firstName}
            handleInputChange={setFields}
            label="First Name"
          />
          <Input
            type="text"
            placeholder="Last Name"
            id="lastName"
            value={lastName}
            handleInputChange={setFields}
            label="Last Name"
          />
          <Input
            type="email"
            placeholder="Email Address"
            id="email"
            value={email}
            handleInputChange={setFields}
            label="Email"
          />
          <Input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            handleInputChange={setFields}
            label="Password"
          />
          <Input
            type="password"
            placeholder="Repeat-Password"
            id="passwordRe"
            value={passwordRe}
            handleInputChange={setFields}
            label="Repeat Password"
          />
          <div className="profile-registration__btn-div">
            <Button
              modifier="light"
              text="Create"
              handleClick={createTalentAccount}
            />
          </div>
        </form>
      )}
      {type === 'company' && (
        <form className="profile-registration__form">
          <h3 className="profile-registration__heading">CREATE AN ACCOUNT</h3>
          <p
            className={
              error !== 'error'
                ? 'profile-registration__error'
                : 'profile-registration__error-hidden'
            }
          >
            {error}
          </p>
          <Input
            type="text"
            placeholder="Company Name"
            id="companyName"
            value={companyName}
            handleInputChange={setFields}
            label="Company Name"
          />

          <Input
            type="email"
            placeholder="Email Address"
            id="email"
            value={email}
            handleInputChange={setFields}
            label="Email"
          />
          <Input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            handleInputChange={setFields}
            label="Password"
          />
          <Input
            type="password"
            placeholder="Repeat-Password"
            id="passwordRe"
            value={passwordRe}
            handleInputChange={setFields}
            label="Repeat Password"
          />
          <div className="profile-registration__btn-div">
            <Button
              modifier="light"
              text="Create"
              handleClick={createCompanyAccount}
            />
          </div>
        </form>
      )}
      <Modal isOpen={isModalOpen} style={customStyles}>
        <div onClick={() => setIsModalOpen(false)} className="close">
          X
        </div>
        <div className="registration-modal">
          <h1 className="registration-modal__title">
            REGISTRATION SUCCESSFULL!
          </h1>
          <p className="registration-modal__text">
            Please complete your profile.
          </p>
          <div className="registration-modal__btn-div">
            <p className="registration-modal__skip" onClick={handleSkip}>
              skip
            </p>
            <span className="registration-modal__btn-seperator"></span>
            <Button
              modifier="light"
              text="Setup Profile"
              handleClick={() =>
                history.push(`/profilesetup/${type}/${user.id}`)
              }
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileRegistration;
