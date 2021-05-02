import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import JobCard from '../../Components/JobCard';
import TalentCard from '../../Components/TalentCard';
import Match from '../../Components/Match';
import { jobList, talentList, talentMatches, companyMatches, chats } from '../../Utils/dummyData';

import './HomePage.scss';
import Messages from '../../Components/Messages';
import { useData } from '../../hooks/useData';
import { useMatchData } from '../../hooks/useMatchData';

const HomePage = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState('');
  const [currentItem, setCurrentItem] = useState(0);
  const [page, setPage] = useState('job/talent');
  const [chat, setChat] = useState('person1');
  const [status, setStatus] = useState('');
  const [data] = useData(userInfo, status);
  const [matchData] = useMatchData(userInfo.userType, userInfo.userId);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('duuni-app'));
    if (user) {
      setUserInfo(user.userInfo);
      setStatus('render');
      setTimeout(() => {
        setStatus('');
      }, 500);
    } else {
      history.push('/landingPage');
      setUserInfo('');
    }
  }, []);

  const handleRightArrow = () => {
    if (userInfo.userType === 'talent') {
      setCurrentItem(currentItem === data.length - 1 ? 0 : currentItem + 1);
    } else {
      setCurrentItem(currentItem === data.length - 1 ? 0 : currentItem + 1);
    }
  };

  const handleLeftArrow = () => {
    if (userInfo.userType === 'talent') {
      setCurrentItem(currentItem === 0 ? data.length - 1 : currentItem - 1);
    } else {
      setCurrentItem(currentItem === 0 ? data.length - 1 : currentItem - 1);
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
          {userInfo && userInfo.userType === 'talent' ? 'Jobs' : 'Talents'}
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

      {/* job/talent cards------ */}

      {page === 'job/talent' &&
        (data.length > 0 && userInfo ? (
          <div className="homepage__main">
            <FaArrowLeft onClick={handleLeftArrow} className="homepage__arrow" />
            {userInfo.userType === 'talent' && (
              <JobCard
                setPage={setPage}
                setStatus={setStatus}
                userId={userInfo.userId}
                userType={userInfo.userType}
                className="homepage__arrow"
                job={data[currentItem]}
              />
            )}
            {userInfo.userType === 'company' && (
              <TalentCard
                setPage={setPage}
                setStatus={setStatus}
                userId={userInfo.userId}
                userType={userInfo.userType}
                className="homepage__arrow"
                talent={data[currentItem]}
              />
            )}
            <FaArrowRight onClick={handleRightArrow} FaArrowLeft className="homepage__arrow" />
          </div>
        ) : (
          <h3 style={{ color: 'white' }}>no</h3>
        ))}

      {/* Mathces--------------- */}

      {page === 'matches' && (
        <div className="homepage__matches">
          <div className="homepage__match-list">
            {userInfo &&
              userInfo.userType === 'talent' &&
              matchData.map((match) => (
                <Match
                  setpage={setPage}
                  type={userInfo && userInfo.userType}
                  data={match.company}
                  key={match.id}
                />
              ))}
            {userInfo &&
              userInfo.userType === 'company' &&
              matchData.map((match) => (
                <Match
                  setpage={setPage}
                  type={userInfo && userInfo.userType}
                  data={match.talent}
                  key={match.id}
                />
              ))}
          </div>
        </div>
      )}

      {/* Messages */}

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
