import { useState, useEffect } from 'react';
import { getAllJobs } from '../services/jobService';
import {
  getAllTalents,
  getOneCompany,
  getOneTalent,
} from '../services/userService';
import { excludeLiked, filter } from '../Utils/filter';

export const useData = (userInfo, status) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [likes, setLikes] = useState([]);
  const [superlikes, setSuperlikes] = useState('');
  const [finalData, setFinalData] = useState([]);

  const getUserData = () => {
    if (userInfo.userType === 'talent') {
      getOneTalent(userInfo.userId).then((response) => {
        if (response.data) {
          setSearch(response.data.techs);
          setLikes(response.data.likes);
          setSuperlikes(response.data.superLikes);
        }
      });
    } else {
      getOneCompany(userInfo.userId).then((response) => {
        if (response.data) {
          setSearch(response.data.techs);
          setLikes(response.data.likes);
          setSuperlikes(response.data.superLikes);
        }
      });
    }
  };

  const getData = () => {
    if (userInfo.userType === 'talent') {
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
    getUserData();
    const fData = filter(data, search);
    const filtered = excludeLiked(fData, [...likes, ...superlikes]);
    setFinalData(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo, status]);

  return [finalData];
};
