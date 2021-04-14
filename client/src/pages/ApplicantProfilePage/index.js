import React from 'react';
import Button from '../../Components/Button';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import './applicant-prof-page.scss';

const ApplicantProfilePage = ({ modifier }) => {
  const applicant = {
    id: 'asf87a76dfa',
    firstName: 'Chiranjibi',
    lastName: 'Chapagain',
    email: 'chiranjibichapagain@gmail.com',
    phone: '0451405566',
    location: 'Helsinki, Finland',
    title: 'FullStackDeveloper',
    github: 'https://github.com/Chiranjibichapagain',
    linkedin: 'https://www.linkedin.com/feed/',
    about:
      'odales lorem, in commodo lacus odio eu ex. orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis consectetur elit, sit amet sollicitudin ipsum dapibus quis. Phasellus aliquet, enim vitae aliquet efficitur, lorem nunc sodales lorem, in commodo lacus odio eu ex. orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis consectetur elit, sit amet sollicitudin ipsum dapibus quis. Phasellus aliquet, enim vitae aliquet efficitur, lorem nunc sodales lorem, in commodo lacus odio eu ex. orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis consectetur elit, sit amet sollicitudin ipsum dapibus quis. Phasellus aliquet, enim vitae aliquet efficitur, lorem nunc sodales lorem, in commodo lacus odio eu ex. orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis consectetur elit, sit amet sollicitudin ipsum dapibus quis. Phasellus aliquet, enim vitae aliquet efficitur, lorem nunc sodales lorem, in commodo lacus odio eu ex. orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis consectetur elit, sit amet sollicitudin ipsum dapibus quis. Phasellus aliquet, enim vitae aliquet efficitur, lorem nunc sodales lorem, in commodo lacus odio eu ex. orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis consectetur elit, sit amet sollicitudin ipsum dapibus quis. Phasellus aliquet, enim vitae aliquet efficitur, lorem nunc sodales lorem, in commodo lacus odio eu ex. orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis consectetur elit, sit amet sollicitudin ipsum dapibus quis. Phasellus aliquet, enim vitae aliquet efficitur, lorem nunc sodales lorem, in commodo lacus odio eu ex. orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis consectetur elit, sit amet sollicitudin ipsum dapibus quis. Phasellus aliquet, enim vitae aliquet efficitur, lorem nunc sodales lorem, in commodo lacus odio eu ex. orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis consectetur elit, sit amet sollicitudin ipsum dapibus quis. Phasellus aliquet, enim vitae aliquet efficitur, lorem nunc sodales lorem, in commodo lacus odio eu ex. ',

    level: 'Junior',
    type: ['Full-time', 'Part-time'],
    techs: ['React', 'JavaScript', 'Node', 'Express', 'UX Design', 'UI Design'],
    photo:
      'https://avatars.githubusercontent.com/u/38856325?s=400&u=fab689158a188b966fdea8e88ceb5a9b95251a8b&v=4'
  };
  const handleGithub = () => {
    window.open(applicant.github);
  };
  const handleLinkedin = () => {
    window.open(applicant.linkedin);
  };
  return (
    <div className="employee">
      <div className="employee__main">
        <img className="employee__image" src={applicant.photo} alt="profile picture" />
        <div className="employee__content">
          <h2 className="employee__text">
            {applicant.firstName} {applicant.lastName}
          </h2>
          <p className="employee-text-type"> {applicant.location}</p>
          <p className="employee__text">{applicant.title}</p>
          <p className="employee-text-type">
            {applicant.level}, {applicant.type}
          </p>
          <p>
            <p className="employee__about">About me</p>
            <p className="employee-about-desc">{applicant.about}</p>
          </p>
          <p className="employee-text-techs">
            {applicant.techs.map((item, idx) => (
              <span key={idx}>{`${item}, `}</span>
            ))}
          </p>

          <div className="employee__icons">
            <AiFillGithub onClick={handleGithub} className="employee__icons--icons" />

            <AiFillLinkedin onClick={handleLinkedin} className="employee__icons--icons" />
          </div>
          <div className="employee__btn-div">
            <Button text="Edit Profile" modifier="light" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProfilePage;
