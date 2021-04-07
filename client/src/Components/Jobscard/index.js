import React from 'react';
import { FaHeart, FaInfo } from 'react-icons/fa';
import { IoMdPersonAdd } from 'react-icons/io';
import { useState } from 'react';

import './Jobscard.scss';

const Jobcard = ({
  user,
  applicantImage,
  image,
  jobtitle,
  applicantTitle,
  deadline,
  availability,
  location,
  applicantLocation,
  level,
  applicantLevel,
  skills,
  applicantSkills,
  company,
  applicantName,
  type,
  applicantType,
  handleOpenInfo,
  handleSuperLike,
  handlelike
}) => {
  const [userType, setUserType] = useState(false);
  const handleIdentifier = () => {
    if (user === 'employer') setUserType(true);
  };
  window.addEventListener('DOMContentLoaded', handleIdentifier);
  return (
    <>
      <section className="jobcard">
        {userType ? (
          <img className="jobcard__avatar" src={`${image}`} alt="company logo" />
        ) : (
          <img className="jobcard__avatar" src={`${applicantImage}`} alt="applicant image" />
        )}

        {userType ? (
          <h2 className="jobcard__company">{company}</h2>
        ) : (
          <h2 className="jobcard__company">{applicantName}</h2>
        )}

        <div className="jobcard__head">
          <p className="jobcard__head jobcard__head--title">
            {userType ? <b>{jobtitle}</b> : <b>{applicantTitle}</b>}
          </p>

          {userType ? (
            <p className="jobcard__head jobcard__head--location">{location} </p>
          ) : (
            <p className="jobcard__head jobcard__head--location"> {applicantLocation}</p>
          )}
        </div>
        <div className="jobcard__leveltype">
          {userType ? (
            <p className="title-level">
              {level}, &nbsp;&nbsp;
              {type}
            </p>
          ) : (
            <p className="title-level">
              {applicantLevel}, &nbsp;&nbsp;
              {applicantType}
            </p>
          )}
        </div>
        <div className="jobcard__skills">
          {userType ? <p>{skills}</p> : <p>{applicantSkills}</p>}
        </div>
        <h4 className="jobcard__deadline">
          {userType ? (
            <b>Deadline: &nbsp;&nbsp; {deadline} </b>
          ) : (
            <b>Available from: &nbsp;&nbsp; {availability} </b>
          )}
        </h4>
        <div className="jobcard__icons">
          <FaInfo onClick={handleOpenInfo} style={{ height: '2em', width: '2em' }} />
          <FaHeart onClick={handleSuperLike} style={{ height: '2em', width: '2em' }} />
          <IoMdPersonAdd onClick={handlelike} style={{ height: '2em', width: '2em' }} />
        </div>
      </section>
    </>
  );
};

export default Jobcard;
