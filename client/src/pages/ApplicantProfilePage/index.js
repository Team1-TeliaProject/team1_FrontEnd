import React from 'react';
import Button from '../../Components/Button';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import './applicant-prof-page.scss';

const ApplicantProfilePage = ({ applicant }) => {
  return (
    <div className="employee">
      <div className="employee__main">
        <img className="employee__image" src={applicant.image} alt="profile picture" />
        <div className="employee__content">
          <h2>
            {applicant.firstname} {applicant.lastname}
          </h2>
          <p> {applicant.location}</p>
          <p className="employee__text">{applicant.position}</p>
          <p>
            {applicant.seniority}, {applicant.type}
          </p>
          <p>
            <p className="employee__about">About me</p>
            {applicant.description}
          </p>
          <p>{applicant.skills}</p>
          <p className="employee__about">
            Early start date: &nbsp;
            {applicant.availability}
          </p>
          <div className="employee__icons">
            <AiFillGithub />

            <AiFillLinkedin />
          </div>
          <div className="employee__btn-div">
            <Button text="Edit Profile" modifier="md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProfilePage;
