import React from 'react';
import Button from '../../Components/Button';

import CompanyProfile from '../../Components/CompanyProfile';

import './employer-prof-page.scss';

const EmployerProfilePage = () => {
  const employer = {
    id: 'asf87a76dfa',
    company: 'CodeWorld',
    location: 'Helsinki, Finland',
    title: 'FullStackDeveloper',
    information: 'For more information, please contact us at hr@codeworld.com',

    about:
      'odales lorem, in commodo lacus odio eu ex. orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis consectetur elit, sit amet sollicitudin ipsum dapibus quis. Phasellus aliquet, enim vitae aliquet efficitur, lorem nunc sodales Suspendisse iaculis consectetur elit, sit amet sollicitudin ipsum dapibus quis. Phasellus aliquet, enim vitae aliquet efficitur, lorem nunc sodales lorem, in commodo lacus odio eu ex. orem ipsum d ',

    level: 'Junior',
    type: ['Full-time', 'Part-time'],
    photo:
      'https://avatars.githubusercontent.com/u/38856325?s=400&u=fab689158a188b966fdea8e88ceb5a9b95251a8b&v=4'
  };

  return (
    <div className="employer">
      <div className="employer__main">
        <img className="employer__image" src={employer.photo} alt="profile picture" />
        <div className="employer__content">
          <h2 className="employer__text">{employer.company}</h2>
          <p className="employer-text-type"> {employer.location}</p>

          {/* <p className="employer__text">{employer.title}</p>
          <p className="employer-text-type">
            {employer.level}, {employer.type}
          </p> */}
          <p>
            <p className="employer__about">About Company</p>
            <p className="employer-about-desc">{employer.about}</p>
            <p className="employer__information">{employer.information}</p>
          </p>

          <div className="employer__job-div">
            <CompanyProfile
              title={employer.title}
              position={employer.level}
              company={employer.company}
              location={employer.location}
            />
            <CompanyProfile
              title={employer.title}
              position={employer.level}
              company={employer.company}
              location={employer.location}
            />
            <CompanyProfile
              title={employer.title}
              position={employer.level}
              company={employer.company}
              location={employer.location}
            />
          </div>

          <div className="employer__btn-div">
            <Button text="Post a job" modifier="light" />
            <Button text="Edit Profile" modifier="light" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerProfilePage;
