import axios from 'axios';

const baseUrlTalent = 'https://duuni-app.herokuapp.com/api/talents';
const baseurlCompany = 'https://duuni-app.herokuapp.com/api/companies';

//talents services

export const registerTalent = async (userInfo) => {
  return await axios.post(`${baseUrlTalent}/register`, userInfo);
};

export const editTalent = async (data, id) => {
  return await axios.put(`${baseUrlTalent}/${id}`, data);
};

export const getOneTalent = (id) => {
  return axios.get(`${baseUrlTalent}/${id}`);
};

export const updateTalent = (id, updates) => {
  return axios.put(`${baseUrlTalent}/${id}`, updates);
};

export const getAllTalents = async () => {
  return await axios.get(baseUrlTalent);
};

export const likeJob = async (userId, jobId) => {
  const info = { userId, jobId };
  return await axios.post(`${baseUrlTalent}/like`, info);
};

export const superlikeJob = async (userId, jobId) => {
  const info = { userId, jobId };
  return await axios.post(`${baseUrlTalent}/superlike`, info);
};

//companies services
export const registerCompany = async (userInfo) => {
  return await axios.post(`${baseurlCompany}/register`, userInfo);
};

export const editCompany = async (data, id) => {
  return await axios.put(`${baseurlCompany}/${id}`, data);
};

export const getOneCompany = (id) => {
  return axios.get(`${baseurlCompany}/${id}`);
};

export const updateCompany = (id, updates) => {
  return axios.put(`${baseurlCompany}/${id}`, updates);
};

export const likeTalent = async (userId, talentId) => {
  const info = { userId, talentId };
  return await axios.post(`${baseurlCompany}/like`, info);
};

export const superlikeTalent = async (userId, talentId) => {
  const info = { userId, talentId };
  return await axios.post(`${baseurlCompany}/superlike`, info);
};
