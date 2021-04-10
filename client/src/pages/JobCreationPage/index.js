import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

import Input from '../../Components/Input';
import InputSelect from '../../Components/InputSelect';
import Textarea from '../../Components/Textarea';
import Button from '../../Components/Button';
import { useForm } from '../../hooks/useForm';
import ImageUpload from '../../Components/ImageUpload';
import { typeOptions, techOptions } from '../../Utils/selectOptions';
import { talentProfile as profile, companyProfile as company } from '../../Utils/dummyData';

import './JobCreationPage.scss';

const JobCreationPage = () => {
  const history = useHistory();
  const [seniority, setSeniority] = useState('');
  const [type, setType] = useState([]);
  const [techList, setTechList] = useState([]);
  const [fields, setFields] = useForm({
    title: '',
    deadline: '',
    location: '',
    description: ''
  });

  const { title, deadline, location, description } = fields;

  console.log('check', title, deadline, location, description);

  const createAccount = (e) => {
    e.preventDefault();
    console.log('created!!');
  };

  const selectStyles = {
    control: (styles) => ({ ...styles, minHeight: '48px', marginBottom: '10px', marginTop: '10px' })
  };

  const handleChangeTech = (options) => {
    const techs = options.map((opt) => opt.value);
    setTechList(techs);
  };

  return (
    <div className="profile-edit">
      <h3 className="profile-edit__heading">ADD A NEW ROLE</h3>

      <form className="profile-edit__form">
        <Input
          type="text"
          placeholder="Job Title"
          id="title"
          value={title}
          handleInputChange={setFields}
        />
        <Input
          type="text"
          placeholder="Deadline"
          id="deadline"
          value={deadline}
          handleInputChange={setFields}
          handleFocus={(e) => (e.target.type = 'date')}
        />
        <Input
          type="text"
          placeholder="City, Country role based on"
          id="location"
          value={location}
          handleInputChange={setFields}
        />
        <Textarea
          maxLength={300}
          placeholder="Job Description"
          id="description"
          value={description}
          handleInputChange={setFields}
        />
        <InputSelect
          handleInputChange={(e) => setSeniority(e.target.value)}
          placeholder="Select seniority"
          options={['Junior', 'Mid-Senior', 'Senior', 'Internship']}
        />
        <InputSelect
          handleInputChange={(e) => setType(e.target.value)}
          placeholder="Select Job-type"
          options={['Full-time', 'Part-time']}
        />
        <Select
          placeholder="select techs"
          onChange={handleChangeTech}
          styles={selectStyles}
          isMulti
          name="tech"
          options={techOptions}
        />

        <div className="profile-edit__btn-div">
          <Button modifier="dark" text="Create" handleClick={createAccount} />
        </div>
      </form>
    </div>
  );
};

export default JobCreationPage;
