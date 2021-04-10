import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';

import './JobCard.scss';

const Jobcard = ({ company, handleSuperLike, handlelike }) => {
  return (
    <section className="jobcard">
      <div className="jobcard__main">
        <img className="jobcard__avatar" src={company.logo} alt="company logo" />
        <h2 className="jobcard__company">{company.name}</h2>
        <div className="jobcard__head">
          <p className="jobcard__text jobcard__text--position">{company.title}</p>
          <p className="jobcard__text jobcard__text--location">{company.location}</p>
        </div>
        <p className="jobcard__text jobcard__text--seniority">
          {company.level}, &nbsp;
          {company.type}
        </p>
        <div className="jobcard__skills">
          {company.techs.map((item, index) => (
            <p className="jobcard__text jobcard__text--skill" key={index}>
              {item}, &nbsp;
            </p>
          ))}
        </div>
        <p className="jobcard__text jobcard__text--description">{company.description}</p>
        <h4 className="jobcard__deadline">
          <b>Deadline: &nbsp;</b>
          {company.deadline}
        </h4>
      </div>
      <div className="jobcard__icons">
        <FaHeart onClick={handleSuperLike} className="jobcard__icon " />
        <BiLike onClick={handlelike} className="jobcard__icon " />
      </div>
    </section>
  );
};

export default Jobcard;
