import axios from 'axios';

const baseUrlTalent = 'http://localhost:5000/api/talents';
const baseurlCompany = 'http://localhost:5000/api/companies';

//talents services

export const registerTalent = async (userInfo) => {
  return await axios.post(`${baseUrlTalent}/register`, userInfo);
};

//companies services
export const registerCompany = async (userInfo) => {
  return await axios.post(`${baseurlCompany}/register`, userInfo);
};
