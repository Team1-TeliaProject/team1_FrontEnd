import React, { useState } from 'react';
import Select from 'react-select';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Textarea from '../../Components/Textarea';
import InputSelect from '../../Components/InputSelect';

import './ProfileRegistration.scss';

const ProfileRegistration = () => {
  const [user, setUser] = useState('Talent');

  console.log('xxx--', user);

  return (
    <div className="profile-registration">
      <h3>create an account</h3>

      <div className="registration">
        <InputSelect
          handleInputChange={(e) => setUser(e.target.value)}
          options={['Employer', 'Talent']}
        />

        {user === 'Talent' && <h1>Talent form</h1>}
        {user === 'Employer' && <h1>Employer form</h1>}
      </div>
    </div>
  );
};

export default ProfileRegistration;
