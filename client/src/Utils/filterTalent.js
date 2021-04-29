import { useState, useEffect } from 'react';
import { getOneJob } from '../services/jobService';
import { getTalents } from '../services/userService';

export const useFilter = (id) => {
  const [user, setUser] = useState([]);
  const [talentList, setTalentList] = useState([]);
  const [job, setJob] = useState([]);

  const fetchUser = async () => {
    await getOneJob(id).then((res) => {
      if (res.data) {
        setJob(res.data.result.techs);
      }
    });
    await getTalents().then((response) => {
      if (response.data) {
        setUser(response.data);
        const found = [];
        let num = 0;
        user.map((item) => {
          const data = item.techs;
          for (let i = 0; i < data.length; i++) {
            if (job.includes(data[i])) {
              num++;
            }
          }
          if (num > job.length * 0.5) {
            num = 0;
            found.push(item);
          }
        });
        setTalentList(found);
      }
    });
  };
  useEffect(() => {
    fetchUser();
  }, [id]);
  return [talentList];
};
