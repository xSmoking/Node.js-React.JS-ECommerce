import axios from 'axios';

const api = axios.create({
  baseURL: 'http://51.79.85.182:3333',
});

export default api;
