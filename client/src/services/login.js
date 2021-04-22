import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/login';

export const logUser = async (credentials) => {
  return await axios.post(baseUrl, credentials);
};
