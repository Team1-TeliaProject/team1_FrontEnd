import React, { useState } from 'react';
import Select from 'react-select';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Textarea from '../../Components/Textarea';
import { useForm } from '../../hooks/useForm';
import InputSelect from '../../Components/InputSelect';

import './ProfileRegistration.scss';

const ProfileRegistration = ({ type = 'talent' }) => {
  const [fields, setFields] = useForm({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
    passwordRe: ''
  });

  const { firstName, lastName, companyName, email, password, passwordRe } = fields;

  const createAccount = () => {
    console.log('created!!');
  };

  return (
    <div className="profile-registration">
      {type === 'talent' && (
        <div className="profile-registration__form">
          <h3 className="profile-registration__heading">CREATE AN ACCOUNT</h3>
          <Input
            placeholder="First Name"
            id="firstName"
            value={firstName}
            handleInputChange={setFields}
          />
          <Input
            placeholder="Last Name"
            id="lastName"
            value={lastName}
            handleInputChange={setFields}
          />
          <Input
            placeholder="Email Address"
            id="email"
            value={email}
            handleInputChange={setFields}
          />
          <Input
            placeholder="Password"
            id="password"
            value={password}
            handleInputChange={setFields}
          />
          <Input
            placeholder="Re-Password"
            id="passwordRe"
            value={passwordRe}
            handleInputChange={setFields}
          />
          <div className="profile-registration__btn-div">
            <Button modifier="dark" text="Create" handleClick={createAccount} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileRegistration;
