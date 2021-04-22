import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import JobCard from '../../Components/JobCard';
import TalentCard from '../../Components/TalentCard';
import MatchedJob from '../../Components/MatchedJob';
import MatchedTalent from '../../Components/MatchedTalent';
import { jobList, talentList, talentMatches, companyMatches, chats } from '../../Utils/dummyData';

import './HomePage.scss';
import Messages from '../../Components/Messages';

const HomePage = () => {
  const [userType, setUserType] = useState('company');
  const [currentItem, setCurrentItem] = useState(0);
  const [page, setPage] = useState('job/talent');
  const [chat, setChat] = useState('person1');

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

      {page === 'messages' && (
        <div className="homepage__message">
          <div className="homepage__message-sidebar">
            <p className="homepage__chat-title">Chat List</p>
            {['person1', 'person2', 'person3', 'person4', 'person 5', 'person,6', 'person7'].map(
              (item, index) => (
                <div
                  className={
                    chat === item
                      ? 'homepage__sidebar-item homepage__sidebar-item--highlight'
                      : 'homepage__sidebar-item'
                  }
                  onClick={() => setChat(item)}
                  key={index}
                >
                  {item}
                </div>
              )
            )}
          </div>
          <div className="homepage__message-main">
            <Messages chats={chats} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
