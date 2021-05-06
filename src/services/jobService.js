import axios from 'axios';

const baseUrl = 'https://duuni-app.herokuapp.com/api/jobs';

export const getAllJobs = async () => {
  return await axios.get(baseUrl);
};

export const createJob = async (job) => {
  return await axios.post(baseUrl, job);
};

export const getOneJob = async (jobId) => {
  return await axios.get(`${baseUrl}/${jobId}`);
};

export const getJobsByCompany = async (companyId) => {
  return await axios.get(`${baseUrl}/byCompany/${companyId}`);
};

export const editJob = async (jobId, updates) => {
  return await axios.put(`${baseUrl}/${jobId}`, updates);
};

export const deleteJob = async (jobId) => {
  return await axios.delete(`${baseUrl}/${jobId}`);
};
