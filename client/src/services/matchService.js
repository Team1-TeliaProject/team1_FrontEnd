import axios from 'axios';

const baseUrl = 'https://duuni-app.herokuapp.com/api/matches';

export const createMatch = async (matchInfo) => {
  return await axios.post(baseUrl, matchInfo);
};

export const getMatches = async (type, id) => {
  return await axios.get(`${baseUrl}/${type}/${id}`);
};
