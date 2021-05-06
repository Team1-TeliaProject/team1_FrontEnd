import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

import Input from '../../Components/Input';
import InputSelect from '../../Components/InputSelect';
import Textarea from '../../Components/Textarea';
import Button from '../../Components/Button';
import { useForm } from '../../hooks/useForm';
import { techOptions } from '../../Utils/selectOptions';

import './JobEditPage.scss';
import { editJob, getOneJob } from '../../services/jobService';

const JobEditPage = ({ match }) => {
  const history = useHistory();
  const { id } = match.params;
  const [job, setJob] = useState('');
  const [level, setLevel] = useState(job.level);
  const [type, setType] = useState(job.type);
  const [techList, setTechList] = useState([]);
  const [error, setError] = useState('');
  const [fields, setFields] = useForm({
    title: '',
    deadline: '',
    location: '',
    description: '',
  });

  const { title, deadline, location, description } = fields;

  const defaultTechs =
    job &&
    job.techs.map((item) => {
      return { label: item, value: item };
    });

  const updateJob = (e) => {
    e.preventDefault();
    const updates = {
      title,
      deadline,
      location,
      description,
      level,
      type,
      techs: techList,
    };
    editJob(id, updates)
      .then((response) => {
        if (response.data) {
          history.push(`/companyProfile/${job.company}`);
        }
      })
      .then((error) => {
        setError(error.response.data.Error);
      });
  };

  useEffect(() => {
    getOneJob(id).then((response) => {
      if (response.data) {
        setJob(response.data);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      minHeight: '48px',
      marginBottom: '10px',
      marginTop: '10px',
    }),
  };

  const handleChangeTech = (options) => {
    const techs = options.map((opt) => opt.value);
    setTechList(techs);
  };

  return (
    job && (
      <div className="job-edit">
        <h3 className="job-edit__heading">EDIT JOB DETAILS</h3>

        <form className="job-edit__form">
          <p className={error ? 'job-edit__error ' : 'job-edit__error--hidden'}>
            {error}
          </p>
          <Input
            label="Job Title"
            type="text"
            placeholder="Job Title"
            id="title"
            defaultValue={job.title}
            handleInputChange={setFields}
          />
          <Input
            label="Application deadline"
            type="text"
            placeholder="Deadline"
            id="deadline"
            defaultValue={job.deadline}
            handleInputChange={setFields}
            handleFocus={(e) => (e.target.type = 'date')}
          />
          <Input
            label="Location"
            type="text"
            placeholder="City, Country role based on"
            id="location"
            defaultValue={job.location}
            handleInputChange={setFields}
          />
          <Textarea
            label="Job Description"
            maxLength={300}
            placeholder="Job Description"
            id="description"
            defaultValue={job.description}
            handleInputChange={setFields}
          />
          <InputSelect
            label="Seniority Level"
            defaultValue={job.level}
            handleInputChange={(e) => setLevel(e.target.value)}
            placeholder="Select seniority"
            options={['Junior', 'Mid-Senior', 'Senior', 'Internship']}
          />
          <InputSelect
            label="Job Type"
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
            <Button modifier="light" text="Update" handleClick={updateJob} />
          </div>
        </form>
      </div>
    )
  );
};

export default JobEditPage;
