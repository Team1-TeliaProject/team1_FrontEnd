import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

import Input from '../../Components/Input';
import InputSelect from '../../Components/InputSelect';
import Textarea from '../../Components/Textarea';
import Button from '../../Components/Button';
import { useForm } from '../../hooks/useForm';
import { techOptions } from '../../Utils/selectOptions';

import './JobCreationPage.scss';
import { createJob } from '../../services/jobService';

const JobCreationPage = ({ match }) => {
  const history = useHistory();
  const { id } = match.params;
  const [error, setError] = useState('');
  const [level, setLevel] = useState('');
  const [type, setType] = useState([]);
  const [techList, setTechList] = useState([]);
  const [fields, setFields] = useForm({
    title: '',
    deadline: '',
    location: '',
    description: ''
  });

  const { title, deadline, location, description } = fields;

  const addNewJob = (e) => {
    e.preventDefault();
    const job = {
      company: id,
      title,
      deadline,
      location,
      description,
      level,
      type,
      techs: techList
    };

    createJob(job)
      .then((response) => {
        if (response.data) {
          history.push(`/companyProfile/${id}`);
        }
      })
      .then((error) => {
        setError(error.response.data.Error);
      });
  };

  const selectStyles = {
    control: (styles) => ({ ...styles, minHeight: '48px', marginBottom: '10px', marginTop: '10px' })
  };

  const handleChangeTech = (options) => {
    const techs = options.map((opt) => opt.value);
    setTechList(techs);
  };

  return (
    <div className="job-create">
      <h3 className="job-create__heading">ADD A NEW ROLE</h3>
      <form className="job-create__form">
        <p className={error ? 'job-create__error ' : 'job-create__error--hidden'}>{error}</p>
        <Input
          type="text"
          placeholder="Job Title"
          id="title"
          value={title}
          handleInputChange={setFields}
          label="Job Title"
        />
        <Input
          type="text"
          placeholder="Deadline"
          id="deadline"
          value={deadline}
          handleInputChange={setFields}
          label="Deadline"
          handleFocus={(e) => (e.target.type = 'date')}
        />
        <Input
          type="text"
          placeholder="City, Country role based on"
          id="location"
          value={location}
          handleInputChange={setFields}
          label="Location"
        />
        <Textarea
          maxLength={300}
          placeholder="Job Description"
          id="description"
          value={description}
          handleInputChange={setFields}
          label="Job Description"
        />
        <InputSelect
          handleInputChange={(e) => setLevel(e.target.value)}
          placeholder="Select seniority"
          options={['Junior', 'Mid-Senior', 'Senior', 'Internship']}
          label="Level"
        />
        <InputSelect
          handleInputChange={(e) => setType(e.target.value)}
          placeholder="Select Job-type"
          options={['Full-time', 'Part-time']}
          label="Job Type"
        />
        <p className="job-create__label">Techs</p>
        <Select
          placeholder="select techs"
          onChange={handleChangeTech}
          styles={selectStyles}
          isMulti
          name="tech"
          options={techOptions}
        />

        <div className="job-create__btn-div">
          <Button modifier="light" text="Create" handleClick={addNewJob} />
        </div>
      </form>
    </div>
  );
};

export default JobCreationPage;
