import axios from 'axios';

// const baseUrl = 'http://localhost:5000/api/login';
const baseUrl = 'https://duuni-app.herokuapp.com/api/login';

export const logUser = async (credentials) => {
  return await axios.post(baseUrl, credentials);
};
