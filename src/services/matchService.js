import axios from 'axios';

// const baseUrl = 'http://localhost:5000/api/matches';
const baseUrl = 'https://duuni-app.herokuapp.com/api/matches';

export const createMatch = async (matchInfo) => {
  return await axios.post(baseUrl, matchInfo);
};

export const getMatches = async (type, id) => {
  console.log('in service', type, id);
  return await axios.get(`${baseUrl}/${type}/${id}`);
};
