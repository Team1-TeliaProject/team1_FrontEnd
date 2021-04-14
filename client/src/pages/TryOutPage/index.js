import React from 'react';
import CompanyProfile from '../../Components/CompanyProfile/index';

import './TryOutPage.scss';

const TryOutPage = () => {
  return (
    <div className="tryout">
      {/* <h1>check out your components here</h1> */}
      <CompanyProfile
        title="Frontend Developer"
        position="Junior Developer"
        name="Emma Stone"
        location="Tampere"
      />
    </div>
  );
};

export default TryOutPage;
