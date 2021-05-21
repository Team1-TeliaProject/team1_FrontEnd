import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

import JobCard from '../../Components/JobCard';
import TalentCard from '../../Components/TalentCard';
import Match from '../../Components/Match';
import Loading from '../../Components/Loading';
import { chats } from '../../Utils/dummyData';
import Messages from '../../Components/Messages';
import { useData } from '../../hooks/useData';
import { useMatchData } from '../../hooks/useMatchData';

import './HomePage.scss';

const HomePage = ({ location }) => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState('');
  const [chatUser, setChatUser] = useState(null);
  const [currentItem, setCurrentItem] = useState(0);
  const [page, setPage] = useState('job/talent');
  const [chat, setChat] = useState([]);
  const [status, setStatus] = useState('');
  const [data] = useData(userInfo, status);
  const [matchData, setIsMatched] = useMatchData(userInfo && userInfo);

  const dummyMatch = [
    {"name" : 'person1', "id" : 1},
    {"name" : 'person2', "id" : 2},
    {"name" : 'person3', "id" : 3},
    {"name" : 'person4', "id" : 4},
    {"name" : 'person5', "id" : 5}
  ];

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

  useEffect(()=>{
    matchData.map((item, index)=>{
      let chatItem = {}
      if(userInfo.userType == 'talent'){
        chatItem.id = item.company.id;
        chatItem.name = item.company.name;
      }else{
        chatItem.id = item.talent.id;
        chatItem.name = item.talent.firstName + ' ' + item.talent.lastName;
      }

      if(index == 0){
        setChatUser(chatItem);
      }

      setChat(chat => [...chat, chatItem])
    })

  },[matchData]);

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
            <FiArrowLeftCircle
              onClick={handleLeftArrow}
              className="homepage__arrow"
            />
            {userInfo.userType === 'talent' && (
              <JobCard
                setPage={setPage}
                setStatus={setStatus}
                setIsMatched={setIsMatched}
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
                setIsMatched={setIsMatched}
                userId={userInfo.userId}
                userType={userInfo.userType}
                className="homepage__arrow"
                talent={data[currentItem]}
              />
            )}
            <FiArrowRightCircle
              onClick={handleRightArrow}
              FaArrowLeft
              className="homepage__arrow"
            />
          </div>
        ) : (
          <Loading text={userInfo.userType === 'talent' ? 'jobs' : 'talents'} />
        ))}

      {/* Mathces--------------- */}

      {page === 'matches' &&
        (matchData.length > 0 ? (
          <div className="homepage__matches">
            {userInfo &&
              userInfo.userType === 'talent' &&
              matchData.map((match) => (
                <Match
                  matchType={match.type}
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
                  matchType={match.type}
                  setpage={setPage}
                  type={userInfo && userInfo.userType}
                  data={match.talent}
                  key={match.id}
                />
              ))}
          </div>
        ) : (
          <Loading text="matches" />
        ))}

      {/* Messages */}

      {page === 'messages' && (
        <div className="homepage__message">
          <div className="homepage__message-sidebar">
            <p className="homepage__chat-title">Chat List</p>
            {chat.map((item, index) => (
              <div
                className={
                  chatUser.name === item.name
                    ? 'homepage__sidebar-item homepage__sidebar-item--highlight'
                    : 'homepage__sidebar-item'
                }
                onClick={() => setChatUser(item)}
                key={index}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="homepage__message-main">
            <Messages chats={chats} userInfo={userInfo} matchedUser={chatUser}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
