import React from 'react';
import { FaHeart} from 'react-icons/fa';
import { BiLike} from 'react-icons/bi';

import './applicantcard.scss';

const ApplicantCard = ({
applicant, handleSuperLike, handlelike
}) => {
  return (
    <>
      <section className="applicantcard">
        <div className="applicant">
        <img className="applicant__avatar" src={`${applicant.image}`} alt="company logo" />
        <h2 className="applicant__company">{applicant.name}</h2>
        <div className="applicant__head">
          <p className="applicant__text applicant__text--position">
          {applicant.specialty}: {applicant.position} 
          </p>
          <p className="applicant__text applicant__text--location">{applicant.location}</p>
        </div>
        <div className="applicant__leveltype">
          <p className="applicant__text applicant__text--seniority" >
            {applicant.seniority}, &nbsp;&nbsp;
            {applicant.type}
          </p>
        </div>
        <div className="applicant__skills">
          <p className="applicant__text applicant__text--skills">{applicant.skills}</p>
          <p className="applicant__text applicant__text--description">{applicant.description}</p>
        </div>
        <h4 className="applicant__deadline">
          <b>Available: &nbsp;&nbsp;</b>
          {applicant.available}
        </h4>
        </div>
        <div className="applicant__icons">
          <FaHeart onClick={handleSuperLike}  className="applicant__icons applicant__icons--superlike"/>
          <BiLike onClick={handlelike}  className="applicant__icons applicant__icons--like"/>
        </div>
      </section>
    </>
  );
};

export default ApplicantCard;