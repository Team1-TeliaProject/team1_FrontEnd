import { useState, useEffect } from 'react';
import { getMatches } from '../services/matchService';

export const useMatchData = (userType, userId) => {
  const [matchData, setMatchData] = useState([]);
  const [isMatched, setIsMatched] = useState(false);

  const fetchData = async () => {
    await getMatches(userType, userId).then((response) => {
      setMatchData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, [userId, isMatched]);

  return [matchData, setIsMatched];
};
