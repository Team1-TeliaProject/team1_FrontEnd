import { useState, useEffect } from 'react';

export const useMatchData = (userId) => {
  const [matchData, setMatchData] = useState([]);

  const fetchData = () => {};

  useEffect(() => {
    fetchData();
  }, [userId]);

  return [matchData];
};
