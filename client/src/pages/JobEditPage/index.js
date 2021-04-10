import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

import Input from '../../Components/Input';
import InputSelect from '../../Components/InputSelect';
import Textarea from '../../Components/Textarea';
import Button from '../../Components/Button';
import { useForm } from '../../hooks/useForm';
import { Job } from '../../Utils/dummyData';
import { techOptions } from '../../Utils/selectOptions';

import './JobEditPage.scss';

const JobEditPage = () => {
  const history = useHistory();
  const [level, setLevel] = useState(Job.level);
  const [type, setType] = useState(Job.type);
  const [techList, setTechList] = useState([]);
  const [fields, setFields] = useForm({
    title: Job.title,
    deadline: Job.deadline,
    location: Job.location,
    description: Job.description
  });

  const { title, deadline, location, description } = fields;

  const defaultTechs = Job.techs.map((item) => {
    return { label: item, value: item };
  });

  const updateJob = (e) => {
    e.preventDefault();
    console.log('updated!!');
  };

  const selectStyles = {
    control: (styles) => ({ ...styles, minHeight: '48px', marginBottom: '10px', marginTop: '10px' })
  };

  const handleChangeTech = (options) => {
    const techs = options.map((opt) => opt.value);
    setTechList(techs);
  };

  return (
    <div className="job-edit">
      <h3 className="job-edit__heading">EDIT JOB DETAILS</h3>

      <form className="job-edit__form">
        <p className="job-edit__label">Job title</p>
        <Input
          type="text"
          placeholder="Job Title"
          id="title"
          value={title}
          handleInputChange={setFields}
        />
        <p className="job-edit__label">Deadline</p>
        <Input
          type="text"
          placeholder="Deadline"
          id="deadline"
          value={deadline}
          handleInputChange={setFields}
          handleFocus={(e) => (e.target.type = 'date')}
        />
        <p className="job-edit__label">Location</p>
        <Input
          type="text"
          placeholder="City, Country role based on"
          id="location"
          value={location}
          handleInputChange={setFields}
        />
        <p className="job-edit__label">Job Description</p>
        <Textarea
          maxLength={300}
          placeholder="Job Description"
          id="description"
          value={description}
          handleInputChange={setFields}
        />
        <p className="job-edit__label">Seniority Level</p>
        <InputSelect
          handleInputChange={(e) => setLevel(e.target.value)}
          placeholder="Select seniority"
          options={['Junior', 'Mid-Senior', 'Senior', 'Internship']}
        />
        <p className="job-edit__label">Job Type</p>
        <InputSelect
          handleInputChange={(e) => setType(e.target.value)}
          placeholder="Select Job-type"
          options={['Full-time', 'Part-time']}
        />
        <p className="job-edit__label">Tech Stack</p>
        <Select
          defaultValue={defaultTechs}
          placeholder="select techs"
          onChange={handleChangeTech}
          styles={selectStyles}
          isMulti
          name="tech"
          options={techOptions}
        />

        <div className="job-edit__btn-div">
          <Button modifier="dark" text="Update" handleClick={updateJob} />
        </div>
      </form>
    </div>
  );
};

export default JobEditPage;
