import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { likeJob, superlikeJob } from '../../services/userService';

import './JobCard.scss';

const Jobcard = ({ job, userId, setStatus }) => {
  const handleLike = () => {
    likeJob(userId, job.id).then((response) => {
      if (response.data) {
        console.log('resss--', response.data);
        setStatus('liked');
        setTimeout(() => {
          setStatus('');
        }, 500);
      }
    });
  };

  const handleSuperLike = () => {
    superlikeJob(userId, job.id).then((response) => {
      if (response.data) {
        console.log('resss--', response.data);
        setStatus('superliked');
        setTimeout(() => {
          setStatus('');
        }, 500);
      }
    });
  };

  return (
    <section className="jobcard">
      {job ? (
        <div>
          <div className="jobcard__main">
            <div className="jobcard__head">
              <img
                className="jobcard__avatar"
                src={job.company && job.company.logo}
                alt="company logo"
              />
              <div className="jobcard__job-info">
                <h2 className="jobcard__company">{job.company && job.company.name}</h2>
                <p className="jobcard__text jobcard__text--location">{job.location}</p>
              </div>
            </div>
            <p className="jobcard__text jobcard__text--position">{job.title}</p>
            <p className="jobcard__text jobcard__text--seniority">
              {job.level}, &nbsp;
              {job.type}
            </p>
            <div className="jobcard__skills">
              {job.techs.map((item, index) => (
                <p className="jobcard__text jobcard__text--skill" key={index}>
                  {item}, &nbsp;
                </p>
              ))}
            </div>
            <p className="jobcard__text jobcard__text--description">{job.description}</p>
            <h4 className="jobcard__deadline">
              <b>Deadline: &nbsp;</b>
              {job.deadline}
            </h4>
          </div>
          <div className="jobcard__icons">
            <FaHeart onClick={handleSuperLike} className="jobcard__icon " />
            <FaThumbsUp onClick={handleLike} className="jobcard__icon " />
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Jobcard;
