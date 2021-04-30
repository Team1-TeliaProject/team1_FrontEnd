import { useState, useEffect } from 'react';
import { getOneCompany, getOneTalent } from '../services/userService';

export const useMatch = (userId, userType, guest) => {
  const [isMatched, setIsMatched] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [userlikes, setUserlikes] = useState([]);
  const [userSuperlikes, setUserSuperlikes] = useState([]);

  const userAllLikes = [...userlikes, ...userSuperlikes]; // my likes

  const guestLikes = guest && guest.likes;
  const guestSuperlikes = guest && guest.superLikes;

  const guestAllLikes = [...guestLikes, ...guestSuperlikes];

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
          setUserlikes(response.data.likes);
          setUserSuperlikes(response.data.superLikes);
        }
      });
    }

    console.log('running--', isLiked);
    if (guestAllLikes.includes(userId)) {
      setIsMatched(true);
    }
  }, [isLiked]);

  return [isMatched, setIsLiked];
};
