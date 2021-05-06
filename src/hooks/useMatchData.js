import { useState, useEffect } from 'react';
import { getMatches } from '../services/matchService';

export const useMatchData = (userInfo) => {
  const [matchData, setMatchData] = useState([]);
  const [isMatched, setIsMatched] = useState(false);

  const fetchData = async () => {
    if (userInfo) {
      await getMatches(userInfo.userType, userInfo.userId).then((response) => {
        setMatchData(response.data);
      });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo, isMatched]);

  return [matchData, setIsMatched];
};
