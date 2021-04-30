import { useState, useEffect } from 'react';
import { getAllJobs } from '../services/jobService';
import { getAllTalents } from '../services/userService';

export const useData = (userType, status) => {
  const [data, setData] = useState([]);

  const getData = () => {
    if (userType === 'talent') {
      getAllJobs().then((response) => {
        if (response.data) {
          setData(response.data);
        }
      });
    } else {
      getAllTalents().then((response) => {
        if (response.data) {
          setData(response.data);
        }
      });
    }
  };

  useEffect(() => {
    getData();
  }, [userType, status]);

  return [data && data];
};
