import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'https://f1sql.onrender.com',
  // baseURL: 'http://localhost:8000',
});