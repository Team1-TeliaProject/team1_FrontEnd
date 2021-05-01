import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/matches';

export const createMatch = async (matchInfo) => {
  return await axios.post(baseUrl, matchInfo);
};

export const getMatches = async (id) => {
  return await axios.get(`${baseUrl}/${id}`);
};
