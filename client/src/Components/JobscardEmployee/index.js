import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';

import './Jobscard.scss';

const Jobcard = ({ employer, handleSuperLike, handlelike }) => {
  console.log('xxxx--', employer);
  return (
    <section className="jobcard">
      <div className="jobcard__main">
        <img className="jobcard__avatar" src={employer.company.logo} alt="company logo" />
        <h2 className="jobcard__company">{employer.company.companyName}</h2>
        <div className="jobcard__head">
          <p className="jobcard__text jobcard__text--position">{employer.title}</p>
          <p className="jobcard__text jobcard__text--location">{employer.location}</p>
        </div>
        <p className="jobcard__text jobcard__text--seniority">
          {employer.level}, &nbsp;
          {employer.type}
        </p>
        <div className="jobcard__skills">
          {employer.techs.map((item, index) => (
            <p className="jobcard__text jobcard__text--skill" key={index}>
              {item}, &nbsp;
            </p>
          ))}
        </div>
        <p className="jobcard__text jobcard__text--description">{employer.description}</p>
        <h4 className="jobcard__deadline">
          <b>Deadline: &nbsp;</b>
          {employer.deadline}
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
