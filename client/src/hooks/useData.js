import { useState, useEffect } from 'react';
import { getAllJobs } from '../services/jobService';
import { getAllTalents, getOneCompany, getOneTalent } from '../services/userService';
import { excludeLiked, filter } from '../Utils/filter';

export const useData = (userInfo, status) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [likes, setLikes] = useState([]);
  const [superlikes, setSuperlikes] = useState('');

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
          setSearch(['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React']);
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

  const fData = filter(data, search);

  // const filtered = excludeLiked(fData, [...likes, ...superlikes]);

  useEffect(() => {
    getUserData();
    getData();
  }, [userInfo, status]);

  return [fData];
};
