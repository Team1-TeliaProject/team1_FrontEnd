import React from 'react';
import { FaHeart} from 'react-icons/fa';
import { BiLike} from 'react-icons/bi';

import './Jobscard.scss';

const Jobcard = ({
employer, handleSuperLike, handlelike
}) => {
  return (
    <>
      <section className="employer">
        <div className="jobcard">
        <img className="jobcard__avatar" src={`${employer.image}`} alt="company logo" />
        <h2 className="jobcard__company">{employer.company}</h2>
        <div className="jobcard__head">
          <p className="jobcard__text jobcard__text--position">
            {employer.position}
          </p>
          <p className="jobcard__text jobcard__text--location">{employer.location}</p>
        </div>
        <div className="jobcard__leveltype">
          <p className="jobcard__text jobcard__text--seniority" >
            {employer.seniority}, &nbsp;&nbsp;
            {employer.type}
          </p>
        </div>
        <div className="jobcard__skills">
          <p className="jobcard__text jobcard__text--skills">{employer.skills}</p>
          <p className="jobcard__text jobcard__text--description">{employer.description}</p>
        </div>
        <h4 className="jobcard__deadline">
          <b>Deadline: &nbsp;&nbsp;</b>
          {employer.deadline}
        </h4>
        </div>
        <div className="jobcard__icons">
          <FaHeart onClick={handleSuperLike}  className="jobcard__icons jobcard__icons--superlike"/>
          <BiLike onClick={handlelike}  className="jobcard__icons jobcard__icons--like"/>
        </div>
      </section>
    </>
  );
};

export default Jobcard;
