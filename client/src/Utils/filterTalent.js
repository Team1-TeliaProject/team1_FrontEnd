import { useState, useEffect } from 'react';
import { getOneJob } from '../services/jobService';
import { getTalents } from '../services/userService';
import { getOneTalent } from '../services/userService';
import { getAllJobs } from '../services/jobService';

import { filter } from './filter';

export const useFilter = (id, userType) => {
  const [user, setUser] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [talentList, setTalentList] = useState([]);
  const [jobList, SetJobsList] = useState([]);
  const fetchUser = async () => {
    if (userType === 'company') {
      await getOneJob(id).then((res) => {
        if (res.data) {
          console.log('loggin from hook---', res.data);
          setJobs(res.data.techs);
        }
      });
      await getTalents().then((response) => {
        if (response.data) {
          setUser(response.data);
        }
      });
      const data = await filter(user, jobs);
      setTalentList(data);
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
      const data = await filter(jobs, user);
      SetJobsList(data);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return [talentList, jobList];
};
