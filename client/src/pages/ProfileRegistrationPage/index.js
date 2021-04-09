import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useForm } from '../../hooks/useForm';

import './ProfileRegistration.scss';

const ProfileRegistration = ({ match }) => {
  const history = useHistory();
  const type = match.params.type;
  const [error, setError] = useState('error');
  const [fields, setFields] = useForm({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
    passwordRe: ''
  });

  const { firstName, lastName, companyName, email, password, passwordRe } = fields;

  console.log('check', password, passwordRe, error);

  const createAccount = (e) => {
    e.preventDefault();
    console.log('created!!');
    if (password !== passwordRe) {
      setError('Password not matched');
    } else {
      history.push(`/profilesetup/${type}`);
    }
  };

  return (
    <div className="profile-registration">
      {type === 'talent' && (
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
            placeholder="First Name"
            id="firstName"
            value={firstName}
            handleInputChange={setFields}
          />
          <Input
            type="text"
            placeholder="Last Name"
            id="lastName"
            value={lastName}
            handleInputChange={setFields}
          />
          <Input
            type="email"
            placeholder="Email Address"
            id="email"
            value={email}
            handleInputChange={setFields}
          />
          <Input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            handleInputChange={setFields}
          />
          <Input
            type="password"
            placeholder="Re-Password"
            id="passwordRe"
            value={passwordRe}
            handleInputChange={setFields}
          />
          <div className="profile-registration__btn-div">
            <Button modifier="dark" text="Create" handleClick={createAccount} />
          </div>
        </form>
      )}
      {type === 'company' && (
        <form className="profile-registration__form">
          <h3 className="profile-registration__heading">CREATE AN ACCOUNT</h3>
          <Input
            type="text"
            placeholder="Company Name"
            id="companyName"
            value={companyName}
            handleInputChange={setFields}
          />

          <Input
            type="email"
            placeholder="Email Address"
            id="email"
            value={email}
            handleInputChange={setFields}
          />
          <Input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            handleInputChange={setFields}
          />
          <Input
            type="password"
            placeholder="Re-Password"
            id="passwordRe"
            value={passwordRe}
            handleInputChange={setFields}
          />
          <div className="profile-registration__btn-div">
            <Button modifier="dark" text="Create" handleClick={createAccount} />
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileRegistration;
