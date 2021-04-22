import React from 'react';

import './CompanyProfile.scss';

const CompanyProfile = ({ title, position, company, location }) => {
  return (
    <div className="profile">
      <div className="profile__box"></div>
      <div className="profile__content">
        <section>
          <h5>{title}</h5>
          <p>{company}</p>
        </section>
        <section>
          <p>{position}</p>
          <p>{location}</p>
        </section>
      </div>
    </div>
  );
};

export default CompanyProfile;
