import { useState, useEffect } from 'react';
import { getOneCompany, getOneTalent } from '../services/userService';

export const useMatch = (userId, userType, guest) => {
  const [isMatched, setIsMatched] = useState(false);
  const [isSuperMatched, setIsSuperMatched] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [userlikes, setUserlikes] = useState([]);
  const [userSuperlikes, setUserSuperlikes] = useState([]);
  const [jobList, setJobList] = useState([]);

  const userAllLikes = [...userlikes, ...userSuperlikes]; // my likes

  const guestLikes = guest && guest.likes;
  const guestSuperlikes = guest && guest.superLikes;

  const guestAllLikes = [...guestLikes, ...guestSuperlikes];

  // console.log('test--func', guestLikes.includes(...jobList));
  // guestLikes.includes(jobList) && userlikes.includes(guest.id);

  const checkMatch = () => {
    if (userType === 'talent') {
      const jobs = guest && guest.jobs;
      if (guestLikes.includes(userId) && userlikes.includes(...jobs)) {
        setIsMatched(true);
      } else if (guestSuperlikes.includes(userId) && userSuperlikes.includes(...jobs)) {
        setIsSuperMatched(true);
      } else if (guestLikes.includes(userId) && userSuperlikes.includes(...jobs)) {
        setIsMatched(true);
      } else if (guestSuperlikes.includes(userId) && userlikes.includes(...jobs)) {
        setIsMatched(true);
      } else {
        setIsMatched(false);
        setIsSuperMatched(false);
      }
    } else {
      if (guestLikes.includes(...jobList) && userlikes.includes(guest.id)) {
        console.log('comes here');
        setIsMatched(true);
      } else if (guestSuperlikes.includes(...jobList) && userSuperlikes.includes(guest.id)) {
        setIsSuperMatched(true);
      } else if (guestLikes.includes(...jobList) && userSuperlikes.includes(guest.id)) {
        setIsMatched(true);
      } else if (guestSuperlikes.includes(...jobList) && userlikes.includes(guest.id)) {
        setIsMatched(true);
      } else {
        setIsMatched(false);
        setIsSuperMatched(false);
      }
    }
  };

  useEffect(() => {
    if (userType === 'talent') {
      getOneTalent(userId).then((response) => {
        if (response.data) {
          setUserlikes(response.data.likes);
          setUserSuperlikes(response.data.superLikes);
        }
      });
    } else {
      getOneCompany(userId).then((response) => {
        if (response.data) {
          const jobList = response.data.jobs;
          setUserlikes(response.data.likes);
          setUserSuperlikes(response.data.superLikes);
          setJobList(jobList);
        }
      });
    }

    checkMatch();
  }, [isLiked]);

  return [isMatched, isSuperMatched, setIsLiked];
};
