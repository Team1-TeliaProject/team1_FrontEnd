import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import profilePic from '../../Assets/proifle.jpeg';

import './JobCard.scss';

const Jobcard = ({ job, handleSuperLike, handlelike }) => {
  return (
    <section className="jobcard">
      <div className="jobcard__main">
        <div className="jobcard__head">
          <img
            className="jobcard__avatar"
            src={job.companyLogo ? job.companyLogo : profilePic}
            alt="company logo"
          />
          <div className="jobcard__job-info">
            <h2 className="jobcard__company">{job.companyName}</h2>
            {job.location && (
              <p className="jobcard__text jobcard__text--location">{job.location}</p>
            )}
          </div>
        </div>
        {job.title && <p className="jobcard__text jobcard__text--position">{job.title}</p>}
        {(job.level || job.type) && (
          <p className="jobcard__text jobcard__text--seniority">
            {job.level}, &nbsp;
            {job.type}
          </p>
        )}

        <div className="jobcard__skills">
          {job.techs.map((item, index) => (
            <p className="jobcard__text jobcard__text--skill" key={index}>
              {item}, &nbsp;
            </p>
          ))}
        </div>
        {job.description && (
          <p className="jobcard__text jobcard__text--description">{job.description}</p>
        )}
        {job.deadline && (
          <h4 className="jobcard__deadline">
            <b>Deadline: &nbsp;</b>
            {job.deadline}
          </h4>
        )}
      </div>
      <div className="jobcard__icons">
        <FaHeart onClick={handleSuperLike} className="jobcard__icon " />
        <FaThumbsUp onClick={handlelike} className="jobcard__icon " />
      </div>
    </section>
  );
};

export default Jobcard;
