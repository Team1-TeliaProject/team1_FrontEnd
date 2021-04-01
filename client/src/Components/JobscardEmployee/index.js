import React from 'react';
import { FaHeart, FaInfo } from 'react-icons/fa';
import { BsHeartFill } from 'react-icons/bs';

import './Jobscard.scss';

const Jobcard = ({
  image,
  jobtitle,
  deadline,
  location,
  level,
  skills,
  company,
  type,
  handleOpenInfo,
  handleSuperLike,
  handlelike
}) => {
  return (
    <>
      <section className="jobcard">
        <img className="jobcard__avatar" src={`${image}`} alt="company logo" />
        <h2 className="jobcard__company">{company}</h2>

        <div className="jobcard__head">
          <p className="jobcard__head jobcard__head--title">
            <b>{jobtitle}</b>
          </p>
          <p className="jobcard__head jobcard__head--location">{location}</p>
        </div>
        <div className="jobcard__leveltype">
          <p className="title-level">
            {level},&nbsp;&nbsp;
            {type}
          </p>
        </div>

        <div className="jobcard__skills">
          <p>{skills}</p>
        </div>
        <h4 className="jobcard__deadline">
          <b>Deadline: &nbsp;&nbsp;</b>
          {deadline}
        </h4>
        <div className="jobcard__icons">
          <FaInfo onClick={handleOpenInfo} style={{ height: '2em', width: '2em' }} />
          <FaHeart onClick={handleSuperLike} style={{ height: '3em', width: '3em' }} />
          <BsHeartFill onClick={handlelike} style={{ height: '2em', width: '2em' }} />
        </div>
      </section>
    </>
  );
};

export default Jobcard;
