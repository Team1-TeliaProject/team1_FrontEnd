import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { deleteJob } from '../../services/jobService';

import './Job.scss';

const Job = ({ job, setStatus }) => {
  const history = useHistory();

  const handleDelete = () => {
    deleteJob(job.id);
    setStatus('deleted');
    setTimeout(() => {
      setStatus('');
    }, 500);
  };

  return (
    <div className="company-job">
      <section className="company-job__section">
        <h5>{job.title}</h5>
        <p>Deadline: {job.deadline}</p>
      </section>
      <section className="company-job__section">
        <p>{job.level}</p>
        <p>{job.location}</p>
      </section>

      <section className="company-job__section company-job__section--icons">
        <FaPencilAlt
          onClick={() => history.push(`/profile/vacancy/${job.id}/edit`)}
          className="company-job__icon"
        />
        <FaTrashAlt onClick={handleDelete} color="red" className="company-job__icon" />
      </section>
    </div>
  );
};

export default Job;
