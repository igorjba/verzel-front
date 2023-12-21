import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

const publicApi = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

publicApi.interceptors.request.use(
  (config) => {
    const storedData = localStorage.getItem('authData');
    if (storedData) {
      const authData = JSON.parse(storedData);
      const token = authData.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { publicApi };
