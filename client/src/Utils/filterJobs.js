import { useState, useEffect } from 'react';
import { getOneTalent } from '../services/userService';
import { getAllJobs } from '../services/userService';

import { filterTalent } from './filter';

export const useJobsFilter = (id, userType) => {
  const [user, setUser] = useState([]);
  const [jobList, SetJobsList] = useState([]);
  const [jobs, setJobs] = useState([]);

  const fetchUser = async () => {
    await getOneTalent(id).then((res) => {
      if (res.data) {
        setUser(res.data.techs);
      }
    });
    await getAllJobs().then((response) => {
      if (response.data) {
        setJobs(response.data);
      }
    });
    const data = await filterTalent(jobs, user);
    SetJobsList(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return [jobList];
};
