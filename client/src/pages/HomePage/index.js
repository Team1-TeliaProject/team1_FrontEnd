import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Jobcard from '../../Components/JobCard';

import JobCard from '../../Components/JobCard';
import TalentCard from '../../Components/TalentCard';
import MatchedJob from '../../Components/MatchedJob';
import MatchedTalent from '../../Components/MatchedTalent';
import { jobList, talentList, talentMatches, companyMatches } from '../../Utils/dummyData';

import './HomePage.scss';

const HomePage = () => {
  const [userType, setUserType] = useState('talent');
  const [currentItem, setCurrentItem] = useState(0);
  const [page, setPage] = useState('job/talent');

  const handleRightArrow = () => {
    if (userType === 'talent') {
      setCurrentItem(currentItem === jobList.length - 1 ? 0 : currentItem + 1);
    } else {
      setCurrentItem(currentItem === talentList.length - 1 ? 0 : currentItem + 1);
    }
  };
  const handleLeftArrow = () => {
    if (userType === 'talent') {
      setCurrentItem(currentItem === 0 ? jobList.length - 1 : currentItem - 1);
    } else {
      setCurrentItem(currentItem === 0 ? jobList.length - 1 : currentItem - 1);
    }
  };

  return (
    <div className="homepage">
      <div className="homepage__nav">
        <span
          onClick={() => setPage('job/talent')}
          className={
            page === 'job/talent'
              ? 'homepage__nav-items'
              : 'homepage__nav-items homepage__nav-items--dim'
          }
        >
          {userType === 'talent' ? 'Jobs' : 'Talents'}
        </span>
        <span
          onClick={() => setPage('matches')}
          className={
            page === 'matches'
              ? 'homepage__nav-items'
              : 'homepage__nav-items homepage__nav-items--dim'
          }
        >
          Matches
        </span>
        <span
          onClick={() => setPage('messages')}
          className={
            page === 'messages'
              ? 'homepage__nav-items'
              : 'homepage__nav-items homepage__nav-items--dim'
          }
        >
          Messages
        </span>
      </div>
      <hr className="homepage__hr" />
      {page === 'job/talent' && (
        <div className="homepage__main">
          <FaArrowLeft onClick={handleLeftArrow} className="homepage__arrow" />
          {userType === 'talent' && (
            <JobCard className="homepage__arrow" job={jobList[currentItem]} />
          )}
          {userType === 'company' && (
            <TalentCard className="homepage__arrow" talent={talentList[currentItem]} />
          )}
          <FaArrowRight onClick={handleRightArrow} FaArrowLeft className="homepage__arrow" />
        </div>
      )}

      {page === 'matches' && (
        <div className="homepage__matches">
          <h1>Your Matches </h1>
          <div>
            {userType === 'talent' &&
              talentMatches.map((item, index) => (
                <MatchedJob setPage={setPage} match={item} key={index} />
              ))}
            {userType === 'company' &&
              companyMatches.map((item, index) => (
                <MatchedTalent setPage={setPage} match={item} key={index} />
              ))}
          </div>
        </div>
      )}

      {page === 'messages' && <h1>Here comes messages</h1>}
    </div>
  );
};

export default HomePage;
