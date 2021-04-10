import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Jobcard from '../../Components/JobscardEmployee';

import JobCard from '../../Components/JobscardEmployee';
import { jobList, talentList } from '../../Utils/dummyData';

import './HomePage.scss';

const HomePage = () => {
  const [userType, setUserType] = useState('talent');
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <span className="homepage__nav-items">{userType === 'talent' ? 'Jobs' : 'Talents'}</span>
        <span className="homepage__nav-items">Matches</span>
        <span className="homepage__nav-items">Messages</span>
      </div>
      <hr className="homepage__hr" />
      <div className="homepage__main">
        <FaArrowLeft className="homepage__arrow" />
        <JobCard className="homepage__arrow" employer={jobList[0]} />
        <FaArrowRight FaArrowLeft className="homepage__arrow" />
      </div>
    </div>
  );
};

export default HomePage;
