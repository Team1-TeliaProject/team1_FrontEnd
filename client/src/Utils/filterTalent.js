import { useState, useEffect } from 'react';
import { getOneJob } from '../services/jobService';
import { getTalents } from '../services/userService';
import { getOneTalent } from '../services/userService';
import { getAllJobs } from '../services/userService';

import { filterTalent } from './filter';

export const useFilter = (id, userType) => {
  const [user, setUser] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const fetchUser = async () => {
    if (userType === 'company') {
      await getOneJob(id).then((res) => {
        if (res.data) {
          setJobs(res.data.result.techs);
        }
      });
      await getTalents().then((response) => {
        if (response.data) {
          setUser(response.data);
        }
      });
      const data = await filterTalent(user, jobs);
      setFilteredList(data);
    } else {
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
      setFilteredList(data);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return [filteredList];
};
